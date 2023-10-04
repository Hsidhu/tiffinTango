import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import {
    Card, Table,
    List, Typography,
    Avatar
} from 'antd';

const { Text } = Typography;

const OrderSummary = ({ cart }) => {

    const [selectedMealPlan, setSelectedMealPlan] = useState();

    if (isEmpty(cart.items)) {
        return null;
    }

    const handleChange = (value) => {
        console.log('Select checked', value);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (price) => `$${price.toFixed(2)}`
        }
    ];

    let data = [];

    const options = cart.items.map((item) =>({
        key: item?.meal_id ?? `${item.meal_plan_option_id}-${item.value_id}`,
        name: item?.name ?? item.meal_plan_option_name,
        price: item.price
    }))
    data.push(...options)

    data.push({
        key: 'delivery',
        name: 'Delivery',
        price: cart.deliveryCharges
    })
    data.push({
        key: 'tax',
        name: 'HST[13%]',
        price: cart.tax
    })

    return (
        <Card title="Selected MealPlan" style={{ width: 400 }}>

            <List itemLayout="horizontal">
                <List.Item
                    actions={[<Text key="list-loadmore-edit">${cart.items[0].price}</Text>]}
                >
                    <List.Item.Meta
                        title={<Text>{cart.items[0].name}</Text>}
                        description="Ant Design"
                    />
                </List.Item>
            </List>

            <Table columns={columns} showHeader={false} dataSource={data}
                pagination={false}
                bordered
                summary={(pageData) => {
                    let totalPrice = 0;
                    pageData.forEach((currentData) => {
                        if(currentData.key === 'tax') {
                            totalPrice = totalPrice * currentData.price;
                        }
                        else {
                            totalPrice += currentData.price;
                        }
                        
                    });
                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>Order Total</Table.Summary.Cell>
                                <Table.Summary.Cell index={1}>
                                    <Text type="danger">${totalPrice.toFixed(2)}</Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        </>
                    );
                }}

            />

        </Card>
    );
}

export default OrderSummary;

