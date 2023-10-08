import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag, Row, Col, Button, Popconfirm } from 'antd';
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
            <Row>
                <Col flex={2}>MealPans</Col>
                <Col flex={3}>
                    <Space align='center' style={{
                            display: "flex",
                            justifyContent: 'end',
                        }}>
                        <Button type="link" onClick={() => history.push('/admin/mealplan/create')} >
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
