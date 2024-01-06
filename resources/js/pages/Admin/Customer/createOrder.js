import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Space, Button, Divider, Select, Radio,
    Typography
} from 'antd';
import { isEmpty } from 'lodash';
import { getMealPlanForOrder } from '../../../redux/Cart/actions'
import { createCustomerOrder } from '../../../redux/Customer/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';
import { orderTypeOptions } from '../../../config/constants'

const CreateOrder = ({ }) => {
    const navigate = useNavigate()
    let { id } = useParams();
    const dispatch = useDispatch();

    const {orderData} = useSelector(state => state)

    const [deliveryType, setDeliveryType] = useState('pickup');
    const [mealplanSelect, setMealplanSelect] = useState([]);
    const [selectedMealplan, setSelectedMealplan] = useState({});
    const [selectedMealplanOptions, setSelectedMealplanOptions] = useState([]);

    useEffect(() => {
        dispatch(getMealPlanForOrder(deliveryType))
    }, [deliveryType])

    useEffect(() => {
        if(orderData) {
            const mealPlanItems = orderData.map((item) => ({
                value: item.meal_id,
                label: `${item.name} - $${item.price}`
            }));
            setMealplanSelect(mealPlanItems)
        }
    }, [orderData]);

    const onFormSubmit = () => {
        const data = {
            customer_id: id,
            meal: selectedMealplan,
            options: selectedMealplanOptions
        }
        dispatch(createCustomerOrder(data, navigate));
    }

    const handleOrderTypeChange = ({ target: { value } }) => {
        if(value != deliveryType){
            setDeliveryType(value)
            setMealplanSelect(null)
            setSelectedMealplan(null)
            setSelectedMealplanOptions(null)
        }
    }

    const onMealPlanChange = (value) => {
        if(value != selectedMealplan) {
            const meal = _.find(orderData, { meal_id: value });
            setSelectedMealplan(meal)
        }
    }

    const onOptionChange = (newItem) => {
        setSelectedMealplanOptions((currentItems) => {
            if (!currentItems) {
                // currentItems is null, initialize it as an empty array
                return [newItem];
            }
            // Check if the item already exists
            const existingItemIndex = currentItems.findIndex(item => item.meal_plan_option_id === newItem.meal_plan_option_id);
        
            if (existingItemIndex > -1) {
              // Item exists - update it
              return currentItems.map((item, index) => 
                index === existingItemIndex ? newItem : item
              );
            } else {
              // Item doesn't exist - add it
              return [...currentItems, newItem];
            }
        });
    }

    const buildRadioOptions = (values) =>{
        const buildData = values.map((item) => ({
            value: item.value_id,
            label: `${item.value} - $${item.price}`
        }))

        const onChange = (e) => {
            const optionValue = _.find(values, {value_id: Number(e.target.value) });
            onOptionChange(optionValue)
        }

        return <Radio.Group size="large"
                options={buildData}
                onChange={onChange}
            />;
    }

    const buildSelectOptions = (values) => {
        const buildData = values.map((item)=>({
            value: item.value_id,
            label: `${item.value} - $${item.price}`
        }))

        const onChange = (value) => {
            const optionValue = _.find(values, {value_id: Number(value) });
            onOptionChange(optionValue)
        }

        return <Select size="large"
                options={buildData}
                onChange={onChange}
                placeholder = "Select Extra Options"
                style={{
                    width: "100%"
                }}
        />;
    }

    const buildOptionView = () => {
        return selectedMealplan.mealPlanOptions.map((option, index ) =>
            <Space key={option.meal_plan_option_id} direction="vertical" size="middle" style={{ display: 'flex', margin: "12px 0px" }}>
                <Row>
                    <Col span={4}>
                        <Typography.Text>{option.name}: </Typography.Text>
                    </Col>

                    <Col span={14}>
                        <Space>
                            {option.display == 'select' ? buildSelectOptions(option.values) : null}
                            {option.display == 'radio' ? buildRadioOptions(option.values) : null}
                        </Space>
                        
                    </Col>
                </Row>
            </Space>
        )
    }

    return (
        <>
            <TableHeaderLink
                name="Create Customer Order"
                backUri="/admin/customers"
            />
            <Divider />
            <Row>
                <Col span={16}>

                    <Space direction='vertical' style={{width:"100%", marginBottom:"10px"}}>
                        <Typography.Text>Select Order Type: </Typography.Text>
                        <Radio.Group 
                            size="large" 
                            optionType="button"
                            value={deliveryType}
                            onChange={handleOrderTypeChange}
                            options={orderTypeOptions} 
                        />
                    </Space>

                    <Space direction='vertical' style={{width:"100%", marginBottom:"10px"}}>
                        <Typography.Text>Select MealPlan: </Typography.Text>
                        <Select
                            size={'large'}
                            placeholder={'Select MealPlan'}
                            style={{ width: 600, }}
                            value={selectedMealplan?.meal_id}
                            onChange={onMealPlanChange}
                            options={mealplanSelect}
                        />
                    </Space>

                    {
                        !isEmpty(selectedMealplan) ? buildOptionView() : null
                    }

                    <Button block size={'large'} type="primary" style={{ width: 600, }}
                        disabled={isEmpty(selectedMealplan) ? true : false}
                        onClick={onFormSubmit}
                    >
                        Submit
                    </Button>
                
                </Col>
            </Row>
                

        </>

    );
}

export default CreateOrder;

