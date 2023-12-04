import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { 
    Space, Table, Divider,
    Statistic, Button, Popconfirm 
} from 'antd';
import { getMealPlans } from "../../../redux/MealPlan/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';

const MealPan = ({ }) => {
    const history = useHistory();
    const mealplans = useSelector(state => state.mealplans)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMealPlans())
    }, [])

    if(!mealplans){
        return null;
    }

    const handleEditClick = (id) => {
        history.push(`/admin/mealplan/edit/${id}`)
    }

    const confirm = (e) => {
        console.log(e);
    };
    const cancel = (e) => {
        console.log(e);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            render: (_, record) => (
                <a onClick={ () => handleEditClick(record.id)} >{record.name}</a>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Delivery type',
            dataIndex: 'delivery_type',
            key: 'delivery_type',
        },
        { 
            title: 'price',
            dataIndex: 'price',
            key: 'price',
            render: (_, record) => (
                <Statistic value={record.price} precision={2} prefix={'$'}
                valueStyle={{fontSize:'14px'}}
                />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => handleEditClick(record.id)} >Edit</a>
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                        >
                        <a href="#">Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            <TableHeaderLink
                name="MealPlans"
                HeaderButtons = {[
                    <Link key={'create_mealplan'} to="/admin/mealplan/create">
                        <Button type='primary'>Create</Button>
                    </Link>,
                ]}
            />
            <Divider />
            <Table rowKey="id" columns={columns} dataSource={mealplans.data} />
        </>
    );
}

export default MealPan;
