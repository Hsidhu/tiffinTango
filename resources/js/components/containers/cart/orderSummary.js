import { connect } from "react-redux";
import orderSummary from "../../cart/orderSummary";
import { getMealPlanForOrder } from '../../../redux/MealPlan/actions';
export default connect(
    ({mealplans}) => ({mealplans}),
    { getMealPlanForOrder }
)(orderSummary)