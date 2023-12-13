import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Tabs, Typography, Divider, Form
} from 'antd';

import CreateMealPlanOptions from '../../../components/mealPlan/createMealPlanOptions';
import TableHeaderLink from '../../../components/tableHeaderLink';
import AssignOptionsToMealPlans from '../../../components/mealPlan/assignOptionsToMealPlans';

const CreateOptions = ({ }) => {

    const tabItems = [
        { 
            label: 'Create Options', key: 'create_option', 
            children: <CreateMealPlanOptions /> 
        },
        { 
            label: 'Add Options', key: 'Options', 
            children: <AssignOptionsToMealPlans />
        }
    ];

    return (
        <>
            <TableHeaderLink
                name="MealPlan Options"
                backUri="/admin/mealplans"
            />
            <Divider />
            <Row>
                <Col span={24}>
                    <Tabs items={tabItems} type='cards' />
                </Col>
            </Row>
        </>
    )

}

export default CreateOptions;
