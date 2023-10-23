import React, {useState} from 'react';

import { Calendar, Modal, Button, Form, Input } from 'antd';
import moment from 'moment';


const PickupOrder = ({}) => {

    const [events, setEvents] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [selectedDate, setSelectedDate] = useState(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            // Add the event to the events array
            setEvents([...events, { date: selectedDate, event: values.event }]);
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
        const eventForDate = events.find((event) => event.date === date);

        return (
            <div>
                {eventForDate && <span>{eventForDate.event}</span>}
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
                    <Form.Item name="event" label="Event">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );

}

export default PickupOrder;
