import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row,  Divider, Tabs, Form,
} from 'antd';
import { getDriver, updateDriver } from '../../../redux/Driver/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';
import { getDeliveryWindowsList } from '../../../redux/Common/actions';
import { getDeliveryZoneList } from '../../../redux/DeliveryZone/actions';
import DriverForm from './DriverForm';
import WorkForm from './workForm';

const Edit = ({ }) => {
    const history = useHistory();
    let { id } = useParams();
    const {driver} = useSelector(state => state)
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(getDriver(id))
        dispatch(getDeliveryWindowsList());
        dispatch(getDeliveryZoneList());
    }, [])

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

    useEffect(() => {
        form.setFieldsValue({ ...driver })
    }, [form, driver])

    const items = [
        { 
            label: 'Driver Edit', key: 'driver_edit',
            children: <DriverForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={true} />
        },
        { 
            label: 'Shift Setup', key: 'shift_setup', 
            children: <WorkForm /> 
        },
    ];

    return (
        <>
            <TableHeaderLink
                name="Edit Driver"
                backUri="/admin/drivers"
            />
            <Divider />
            <Tabs items={items} />
        </>

    );
}

export default Edit;
