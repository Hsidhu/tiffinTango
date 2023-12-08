import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row,  Divider, Tabs, Form,
} from 'antd';
import { getDriver, updateDriver } from '../../../redux/Driver/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';
import DriverForm from './DriverForm';

const Edit = ({ }) => {
    const history = useHistory();
    let { id } = useParams();
    const {driver} = useSelector(state => state)
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(getDriver(id))
    }, [])

    useEffect(() => {
        if(driver){
            form.setFieldsValue({ ...driver })
        }
    }, [driver])

    if (!driver) {
        return null;
    }

    const mapSwitchValue = (value) => (value ? 1 : 0);

    const onFormChange = ({ first_name }) => {
        console.log(first_name);
    };

    const onFormSubmit = (values) => {
        values.status = mapSwitchValue(values.status);
        dispatch(updateDriver(values, history));
    }

    

    return (
        <>
            <TableHeaderLink
                name="Edit Driver"
                backUri="/admin/drivers"
            />
            <Divider />
            <DriverForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={true} />
        </>

    );
}

export default Edit;
