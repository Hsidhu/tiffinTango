import React, { useState } from 'react';
import {
    Button, message, Steps,
    Layout, Divider, Row, Col
} from 'antd';
import SelectMealPlanForm from '../../components/containers/cart/selectMealPlanForm';
import SelectedMealPlanView from '../../components/containers/cart/selectedMealPlanView';


const MealPlan = ({nextForm}) => {

    return (
        <Row gutter={16} justify={'center'} align={'center'}>
            <Col span={14}>
                <SelectedMealPlanView />
            </Col>
            <Col span={10}>
                <SelectMealPlanForm nextForm={nextForm} />
            </Col>
        </Row>
    )
}

export default MealPlan
