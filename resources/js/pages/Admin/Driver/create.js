import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Divider,
    Form
} from 'antd';
import { createDriver } from '../../../redux/Driver/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';
import { getDeliveryWindowsList } from '../../../redux/Common/actions';
import DriverForm from './DriverForm';

const Create = ({ }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [form] = Form.useForm()


    useEffect(() => {
        dispatch(getDeliveryWindowsList());
    }, [])

    const mapSwitchValue = (value) => (value ? 1 : 0);

    const onFormChange = ({ name }) => {
        console.log(name);
    };

    const onFormSubmit = (values) => {
        values.status = mapSwitchValue(values.status);
        dispatch(createDriver(values));
        history.push('/admin/drivers')
    }

    return (
        <>
            <TableHeaderLink
                name="Create Driver"
                backUri="/admin/drivers"
            />
            <Divider />
            <DriverForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={false} />
        </>

    );
}

export default Create;
