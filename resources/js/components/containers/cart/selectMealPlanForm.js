import { connect } from "react-redux";
import SelectMealPlanForm from "../../cart/selectMealPlanForm";
import { getMealPlanForOrder, addToCartselectMealPlan, selectMealPlanOption } from '../../../redux/Cart/actions';

export default connect(
    ({orderData, selectedMealPlan, cart}) => ({orderData, selectedMealPlan, cart}),
    { getMealPlanForOrder, addToCartselectMealPlan, selectMealPlanOption }
)(SelectMealPlanForm)