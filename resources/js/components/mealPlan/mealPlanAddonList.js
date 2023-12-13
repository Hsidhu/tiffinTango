import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, List, Typography, Button
} from 'antd';
import { removeMealPlanAddon } from '../../redux/MealPlan/actions';
import { isEmpty } from 'lodash';

const MealPlanAddonList = ({ }) => {
    const history = useHistory()
    const { mealplan } = useSelector(state => state)
    const dispatch = useDispatch();

    if (isEmpty(mealplan)) {
        return null;
    }

    const handleRemoveAddon = (mealPlanID, optionID) => {
        dispatch(removeMealPlanAddon(mealPlanID, optionID));
        window.location.reload();
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    {mealplan.name} - Options:
                    <br/>
                    <List
                        bordered
                        dataSource={mealplan.options}
                        renderItem={item => (
                            <List.Item
                                actions={[<a key="list-loadmore-edit" onClick={() => handleRemoveAddon(mealplan.id, item.id) }>Remove</a>]}
                            >
                              <Typography.Text mark>{item.name} - {item.display_type}</Typography.Text>
                              <List
                                dataSource={item.values}
                                renderItem={value => (
                                    <List.Item>
                                        <Typography.Text mark>{value.value} - ${value.price.toFixed(2)}</Typography.Text>
                                    </List.Item>
                                )}
                              />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>

        </>
    );
}

export default MealPlanAddonList;
