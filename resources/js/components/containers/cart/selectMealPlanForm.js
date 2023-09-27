import { connect } from "react-redux";
import SelectMealPlanForm from "../../cart/selectMealPlanForm";
import { getMealPlanForOrder } from '../../../redux/MealPlan/actions';
export default connect(
    ({mealplans}) => ({mealplans}),
    { getMealPlanForOrder }
)(SelectMealPlanForm)