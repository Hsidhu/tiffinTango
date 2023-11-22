import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Divider,
    Form, Input, Switch
} from 'antd';

import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { GOOGLE_API_KEY } from '../../../config/constants';
import { updateCustomer, getCustomer } from '../../../redux/Customer/actions'
import { phonePattern } from '../../../validationHelper'
import TableHeaderLink from '../../../components/tableHeaderLink';
import CustomerForm from './CustomerForm';

const Edit = ({ }) => {
    const history = useHistory()
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
        dispatch(updateCustomer(values, history));
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
            />
            <Divider />
            <CustomerForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={true}  />
        </>

    );
}

export default Edit;
