import { connect } from "react-redux";
import SelectMealPlanForm from "../../cart/selectMealPlanForm";
import { getMealPlanForOrder, addToCartselectMealPlan, selectMealPlanOption } from '../../../redux/Cart/actions';

export default connect(
    ({orderData, cart}) => ({orderData, cart}),
    { getMealPlanForOrder, addToCartselectMealPlan, selectMealPlanOption }
)(SelectMealPlanForm)