import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import {
    Row, Col, Button,
    Select, Card,
    Radio, Table,
    List, Skeleton,
    Avatar,
    Image, Typography
} from 'antd';

const { Text } = Typography;

import { axiosConfig } from '../../config/constants';
import MealPlanOptions from "./mealPlanOptions"


const SelectMealPlanForm = ({ mealplans, getMealPlanForOrder }) => {

    const [selectedMealPlan, setSelectedMealPlan] = useState();
    const [selectedMealPlanOption, setSelectedMealPlanOption] = useState();

    useEffect(() => {
        getMealPlanForOrder()
    }, [])

    if (isEmpty(mealplans)) {
        return null;
    }

    const optionItems = mealplans.map((item) => ({
        value: item.id,
        label: `${item.name} - $${item.price}`
    }));

    const handleChange = (value) => {
        console.log('Select checked', value);
        const meal = _.find(mealplans, { id: value });
        setSelectedMealPlan(meal)
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Borrow',
            dataIndex: 'borrow',
        }
    ];

    const data = [
        {
            key: 'price',
            name: 'Sub Total:',
            borrow: 30
        },
        {
            key: 'delivery',
            name: 'Delivery',
            borrow: 0
        },
        {
            key: 'tax',
            name: 'HST[13%]',
            borrow: 30
        }
    ];

    return (
        <Row gutter={16}>
            <Col span={16}>
                <Card title="Select Mealpan"  >
                    <Select
                        placeholder = "Select MealPlan"
                        style={{ width: 400 }}
                        onChange={handleChange}
                        options={optionItems}
                    />
                    <div>
                        {
                            selectedMealPlan ? selectedMealPlan.name : null
                        }
                        {
                            selectedMealPlan ?
                                <Image
                                    width={200}
                                    src={`${axiosConfig.HOST_URL}/${selectedMealPlan.image}`}
                                />
                                : null
                        }

                        {
                            selectedMealPlan ? 
                            <MealPlanOptions 
                                options={selectedMealPlan.mealPlanOptions}
                            />
                            : null
                        }
                    </div>
                </Card>

            </Col>
            <Col span={8} >

                <Card title="Selected MealPlan" style={{ width: 400 }}>

                    <List itemLayout="horizontal">
                        <List.Item
                            actions={[
                                <a key="list-loadmore-edit">{selectedMealPlan?.price}</a>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={'https://randomuser.me/api/portraits/men/66.jpg'} />}
                                title={<a href="https://ant.design">{'test'}</a>}
                                description="Ant Design"
                            />
                        </List.Item>
                    </List>

                    <Table columns={columns} dataSource={data}
                        pagination={false}
                        showHeader={false}
                        summary={(pageData) => {
                            let totalBorrow = 0;
                            pageData.forEach(({ borrow }) => {
                                totalBorrow += borrow;
                            });
                            return (
                                <>
                                    <Table.Summary.Row>
                                        <Table.Summary.Cell index={0}>Order Total</Table.Summary.Cell>
                                        <Table.Summary.Cell index={1}>
                                            <Text type="danger">{totalBorrow}</Text>
                                        </Table.Summary.Cell>
                                    </Table.Summary.Row>
                                </>
                            );
                        }}

                    />

                </Card>

            </Col>
        </Row>
    );
}

export default SelectMealPlanForm;
