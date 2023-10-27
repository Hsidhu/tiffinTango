import React, {useState} from 'react';

import { Calendar, Modal, Button, Form, Input, Typography } from 'antd';
import moment from 'moment';
import { addPickupLog } from "../../../redux/Order/actions"
import { useDispatch } from 'react-redux';


const PickupOrder = ({order_id, customer_id, pickups}) => {

    const [events, setEvents] = useState(pickups);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [selectedDate, setSelectedDate] = useState(null);
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
                picked_at:selectedDate
            }))
            setEvents([...events, { picked_at: selectedDate, comment: values.comment }]);
            form.resetFields();
            setIsModalVisible(false);
        });
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };


    const dateCellRender = (value) => {
        const date = value.format('YYYY-MM-DD');
        const eventForDate = events.find((event) => event.picked_at === date);

        return (
            <div>
                {eventForDate && <span>{eventForDate.comment}</span>}
                <Button type="link" onClick={showModal}>
                    +
                </Button>
            </div>
        );
    };

    const onSelect = (value) => {
        setSelectedDate(value.format('YYYY-MM-DD'));
        showModal();
    };

    return (
        <div>
            <Calendar 
                headerRender={({ value, type, onChange, onTypeChange }) => {
                    return (
                        <div
                        style={{
                            padding: 8,
                        }}
                        >
                            <Typography.Title level={4}>Calendar header</Typography.Title>
                    </div>
                    )
                }}
                dateCellRender={dateCellRender} 
                onSelect={onSelect}
                disabledDate={(currentDate)=>{
                    if (currentDate.endOf('d').valueOf() < moment.now()) {
                        return true;
                   }
                   return false;
                }}   
            />
            <Modal
                title="Add Event"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form}>
                    <Form.Item name="comment" label="comment">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );

}

export default PickupOrder;
