import { connect } from "react-redux";
import SelectMealPlanForm from "../../cart/selectMealPlanForm";
import { getMealPlanForOrder, selectMealPlan, selectMealPlanOption } from '../../../redux/Cart/actions';

export default connect(
    ({orderData, cart}) => ({orderData, cart}),
    { getMealPlanForOrder, selectMealPlan, selectMealPlanOption }
)(SelectMealPlanForm)