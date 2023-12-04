import React, {useState} from 'react';

import {Row, Col, Statistic, Modal, Button, Form, Input, InputNumber, List, Divider } from 'antd';
import { addPickupLog } from "../../../redux/Order/actions"
import { useDispatch } from 'react-redux';

const PickupOrder = ({order_id, customer_id, pickups, pickupQuota}) => {

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

    const totalMealsPickedUp = () => {
        return pickups.reduce((sum, item) => sum + item.qty, 0);
    }

    const remainingPickups = () => {
        return ( pickupQuota - totalMealsPickedUp() )
    }

    return (
        <div>

            <Row gutter={16}>
                <Col span={6}>
                    <Statistic title="Remaining" value={ remainingPickups() } />
                    <Button type="primary" disabled={remainingPickups() == 0 ? true:false} onClick={showModal}>
                        Add Pickup log
                    </Button>
                </Col>
                <Col span={6}>
                    <Statistic title="Total Meals Picked UP" value={ totalMealsPickedUp() } />
                </Col>
                <Col span={6}>
                    <Statistic title="Quota" value={ pickupQuota } />
                </Col>
                <Col span={6}>
                    <Statistic title="Total Pickups" value={pickups.length} />
                </Col>
            </Row>

            <Divider/>

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
                            () => ({
                                validator(_, value) {
                                    const maxLimit = remainingPickups();
                                    if (!value || value <= maxLimit) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error(`Quantity cannot exceed ${maxLimit}`));
                                },
                            }),
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
