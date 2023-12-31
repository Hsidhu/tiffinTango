import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Divider, Form
} from 'antd';

import { updateCustomer, getCustomer } from '../../../redux/Customer/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';
import CustomerForm from './CustomerForm';

const Edit = ({ }) => {
    const navigate = useNavigate()
    let { id } = useParams();
    const customer = useSelector(state => state.customer)
    const dispatch = useDispatch();
    const [form] = Form.useForm();


    useEffect(() => {
        dispatch(getCustomer(id))
    }, [])

    if (!customer) {
        return null;
    }

    const onFormSubmit = (values) => {
        dispatch(updateCustomer(values, navigate));
    }

    const onFormChange = ({ name }) => {
        console.log(name);
    };

    useEffect(() => {
        form.setFieldsValue({...customer })
    }, [form, customer])

    return (
        <>
            <TableHeaderLink
                name="Edit Customer"
                backUri="/admin/customers"
                HeaderButtons = {[
                    <Link key={'create_order'} to={`/admin/customer/createOrder/${id}`}>
                        <Button type='primary'>Create Order</Button>
                    </Link>,
                ]}
            />
            <Divider />
            <CustomerForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={true}  />
        </>

    );
}

export default Edit;
