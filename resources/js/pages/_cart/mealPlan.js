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
            <Col
                xs = {{
                    span:24,
                    order: 2,
                }}
                md = {{
                    span:14,
                    order: 1,
                }}
                >
                <SelectedMealPlanView />
            </Col>
            <Col
                xs = {{
                    span:24,
                    order: 1,
                }}
                md = {{
                    span:8,
                    order: 1,
                }}
                >
                <SelectMealPlanForm nextForm={nextForm} />
            </Col>
        </Row>
    )
}

export default MealPlan
