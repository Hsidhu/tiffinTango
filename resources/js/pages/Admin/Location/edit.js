import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col,
    Button,
    Form,
    Divider
} from 'antd';

import TableHeaderLink from '../../../components/tableHeaderLink';
import LocationForm from './LocationForm';
import { getLocation, updateLocation } from '../../../redux/Location/actions'


const Edit = ({ }) => {
    const history = useHistory();
    let { id } = useParams();

    const {location} = useSelector(state => state)
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    useEffect(() => {
        dispatch(getLocation(id))
    }, [])

    if(!location){
        return null;
    }

    const onFormChange = ({ name }) => {
        console.log(name);
    };

    const onFormSubmit = (values) => {
        dispatch(updateLocation(values, history));
    }

    useEffect(() => {
        form.setFieldsValue({ ...location.data })
    }, [form, location])

    return (
        <>
            <TableHeaderLink
                name="Location Edit"
                toUri="/admin/locations"
                toText="Back"
            />
            <Divider/>
            <LocationForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={true}   />
        </>
    );
}

export default Edit;
