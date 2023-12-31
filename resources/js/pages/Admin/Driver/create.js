import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {
    Divider, Form
} from 'antd';
import { createDriver } from '../../../redux/Driver/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';
import { getDeliveryWindowsList } from '../../../redux/Common/actions';
import DriverForm from './DriverForm';

const Create = ({ }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [form] = Form.useForm()

    useEffect(() => {
        dispatch(getDeliveryWindowsList());
    }, [])

    const onFormChange = ({ name }) => {
        console.log(name);
    };

    const onFormSubmit = (values) => {
        dispatch(createDriver(values, navigate));
    }

    return (
        <>
            <TableHeaderLink
                name="Create Driver"
                backUri="/admin/drivers"
            />
            <Divider />
            <DriverForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} />
        </>

    );
}

export default Create;
