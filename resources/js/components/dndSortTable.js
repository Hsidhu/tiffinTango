import { Table } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import _ from 'lodash';
const type = 'DraggableBodyRow';

const DraggableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
    const ref = useRef(null);
    const [{ isOver, dropClassName }, drop] = useDrop({
        accept: type,
        collect: (monitor) => {
            const { index: dragIndex } = monitor.getItem() || {};
            if (dragIndex === index) {
                return {};
            }
            return {
                isOver: monitor.isOver(),
                dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
            };
        },
        drop: (item) => {
            moveRow(item.index, index);
        },
    });
    const [, drag] = useDrag({
        type,
        item: {
            index,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drop(drag(ref));
    return (
        <tr
            ref={ref}
            className={`${className}${isOver ? dropClassName : ''}`}
            style={{
                cursor: 'move',
                ...style,
            }}
            {...restProps}
        />
    );
};

const DndSortTable = ({tableColumns, tableData}) => {
    const [data, setData] = useState(tableData);

    const components = {
        body: {
            row: DraggableBodyRow,
        },
    };
    const moveRow = useCallback(
        (dragIndex, hoverIndex) => {
            const updatedData = _.clone(data);
            const dragRow = data[dragIndex];
            // Splice the data array to move the element from dragIndex to hoverIndex
            updatedData.splice(dragIndex, 1); // Remove the element from dragIndex
            updatedData.splice(hoverIndex, 0, dragRow); // Insert the element at hoverIndex
            setData(updatedData);
        },
        [data],
    );
    return (
        <DndProvider backend={HTML5Backend}>
            <Table
                rowKey={'id'}
                columns={tableColumns}
                dataSource={data}
                components={components}
                onRow={(_, index) => {
                    const attr = {
                        index,
                        moveRow,
                    };
                    return attr;
                }}
            />
        </DndProvider>
    );
};
export default DndSortTable;
