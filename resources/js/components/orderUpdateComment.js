
import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { Input, Space, Typography } from 'antd';

const OrderUpdateComment = ({order_id, field, value, updateOrderStatus}) => {

    const [editable, setEditable] = useState(false);

    if(isEmpty(value)){
        return null;
    }

    const handleDoubleClick = () => {
        setEditable(true);
    };

    const handleChange = (e) => {
        updateOrderStatus({
            id:order_id,
            [field]: e.target.value
        })
    };

    const handleBlur = () => {
        setEditable(false);
    };

    return(
        <>
            <Space direction='vertical'>
                <Typography.Text>{field}:</Typography.Text>
                <Input.TextArea
                        rows={2}
                        value={value}
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
