
import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { Input, Space, Typography } from 'antd';

const OrderUpdateComment = ({order_id, label, field, value, updateOrderStatus}) => {

    const [editable, setEditable] = useState(false);
    const [textValue, setTextValue] = useState(value);

    const handleDoubleClick = () => {
        setEditable(true);
    };

    const handleChange = (e) => {
        setTextValue(e.target.value)
    };

    const handleBlur = (e) => {
        updateOrderStatus({
            id:order_id,
            [field]: textValue
        })
        setEditable(false);
    };

    return(
        <>
            <Space direction='vertical' style={{width:"100%", marginBottom:"10px"}}>
                <Typography.Text>{label}</Typography.Text>
                <Input.TextArea
                        rows={2}
                        value={textValue}
                        onChange={handleChange}
                        onDoubleClick={handleDoubleClick}
                        onBlur={handleBlur}
                        readOnly={!editable}
                    />
            </Space>
        </>
    )
};

export default OrderUpdateComment;
