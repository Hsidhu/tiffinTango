import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Divider,
    Form, Input, Switch
} from 'antd';


import { createCustomers } from '../../../redux/Customer/actions'
import { phonePattern } from '../../../validationHelper'
import TableHeaderLink from '../../../components/tableHeaderLink';
import CustomerForm from './CustomerForm'

const Create = ({ }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    const onFormChange = ({ name }) => {
        console.log(name);
    };
    
    const onFormSubmit = (values) => {
        dispatch(createCustomers(values, navigate));
    }

    return (
        <>
            <TableHeaderLink
                name="Create Customer"
                backUri="/admin/customers"
            />
            <Divider />
            <CustomerForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={false}  />
        </>

    );
}

export default Create;
