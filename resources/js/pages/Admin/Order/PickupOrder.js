import React, {useState} from 'react';

import {Modal, Button, Form, Input, InputNumber, Typography, List, Divider } from 'antd';
import moment from 'moment';
import { addPickupLog } from "../../../redux/Order/actions"
import { useDispatch } from 'react-redux';


const PickupOrder = ({order_id, customer_id, pickups}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields().then((values) => {

            // Add the event to the events array
            dispatch(addPickupLog({
                id: order_id,
                customer_id: customer_id,
                comment: values.comment,
                qty: values.qty
            }))
            form.resetFields();
            setIsModalVisible(false);
            location.reload();
        });
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    return (
        <div>
            {pickups && <List
                itemLayout="horizontal"
                dataSource={pickups}
                renderItem={(item, i) => (
                    <List.Item>
                        <List.Item.Meta
                        title={<strong>{item.comment} - { i + 1}</strong>}
                        description={`Number of meals picked up ${item.qty} on ${item.created_at}`}
                        />
                    </List.Item>
                )}
            />}

            <Divider/>

            <Button type="primary" onClick={showModal}>
                Add Pickup log
            </Button>

            <Modal
                title="Pickup detail"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form}>
                    <Form.Item name="comment" label="Comment"
                        rules={[
                            { required: true },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="qty" label="Quantity"
                        rules={[
                            { required: true },
                        ]}
                    >
                        <InputNumber
                            min={1}
                            step={1}
                            stringMode
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );

}

export default PickupOrder;
