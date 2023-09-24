import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag, Row, Col, Button } from 'antd';
import { getMealPlans } from "../../../redux/MealPlan/actions"

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

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => handleEditClick(record.id)} >Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Row>
                <Col flex={2}>MealPans</Col>
                <Col flex={3}>
                    <Space align='center' style={{
                            display: "flex",
                            justifyContent: 'end',
                        }}>
                        <Button type="link" onClick={() => history.push('/admin/customer/create')} >
                            Create
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Table rowKey="id" columns={columns} dataSource={mealplans.data} />
        </>
    );
}

export default MealPan;
