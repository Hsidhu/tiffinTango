import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const OrderSummary = ({ mealplans }) => {

    const [selectedMealPlan, setSelectedMealPlan] = useState();
    const [selectedMealPlanOption, setSelectedMealPlanOption] = useState();

    

    if (isEmpty(mealplans)) {
        return null;
    }


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

            <Table columns={columns} dataSource={data}
                pagination={false}
                showHeader={false}
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

