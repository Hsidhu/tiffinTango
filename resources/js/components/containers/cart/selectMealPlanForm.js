import { connect } from "react-redux";
import SelectMealPlanForm from "../../cart/selectMealPlanForm";
import { getMealPlanForOrder, addToCartselectMealPlan, selectMealPlanOption, clearCartselectMealPlan } from '../../../redux/Cart/actions';
import { setOrderType } from "../../../redux/Cart/actions";

export default connect(
    ({orderType, orderData, selectedMealPlan, cart}) => ({orderData, selectedMealPlan, cart, orderType}),
    {setOrderType, getMealPlanForOrder, addToCartselectMealPlan, selectMealPlanOption, clearCartselectMealPlan }
)(SelectMealPlanForm)