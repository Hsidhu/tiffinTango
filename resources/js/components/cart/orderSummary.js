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

    if (isEmpty(cart)) {
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
            title: 'Borrow',
            dataIndex: 'borrow',
        }
    ];

    const data = [
        {
            key: `mealplan-${cart.id}`,
            name: cart.name,
            borrow: cart.price
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


    const options = cart?.options.map((item) =>({
        key: item.id,
        name: item.value,
        borrow: item.price
    }))
    data.push(...options)


    return (
        <Card title="Selected MealPlan" style={{ width: 400 }}>

            <List itemLayout="horizontal">
                <List.Item
                    actions={[<a key="list-loadmore-edit">selectedMealPlan</a>]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={'https://randomuser.me/api/portraits/men/66.jpg'} />}
                        title={<a href="https://ant.design">{'test'}</a>}
                        description="Ant Design"
                    />
                </List.Item>
            </List>

            <Table columns={columns} showHeader={false} dataSource={data}
                pagination={false}
                bordered
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
    );
}

export default OrderSummary;

