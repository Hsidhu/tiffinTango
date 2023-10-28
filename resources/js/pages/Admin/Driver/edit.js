import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row,  Divider,
    Form,
} from 'antd';
import { isEmpty } from 'lodash';
import { getDriver, updateDriver } from '../../../redux/Driver/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';
import { getDeliveryWindowsList } from '../../../redux/Common/actions';
import DriverForm from './DriverForm';

const Edit = ({ }) => {
    const history = useHistory();
    let { id } = useParams();
    const {driver} = useSelector(state => state)
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(getDeliveryWindowsList());
        dispatch(getDriver(id))
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
        dispatch(updateDriver(values));
        history.push('/admin/drivers')
    }

    useEffect(() => {
        form.setFieldsValue({ ...driver })
    }, [form, driver])

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
