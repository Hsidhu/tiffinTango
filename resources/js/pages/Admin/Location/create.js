import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col,
    Button,
    Form,
    Divider
} from 'antd';

import LocationForm from './LocationForm';
import { createLocation } from '../../../redux/Location/actions'


const Create = ({ }) => {
    const history = useHistory()
    const {location} = useSelector(state => state)
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    const onFormChange = ({ name }) => {
        console.log(name);
    };

    const onFormSubmit = (values) => {
        dispatch(createLocation(values));
    }

    return (
        <>
            <TableHeaderLink
                name="Create Location"
                toUri="/admin/locations"
                toText="Back"
            />
            <Divider/>
            <LocationForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={false}  />
        </>
    );
}

export default Create;
