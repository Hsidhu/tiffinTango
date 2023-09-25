import { connect } from "react-redux";
import SelectMealPlanForm from "../../cart/selectMealPlanForm";

export default connect(
    ({mealplans}) => ({mealplans}),
    {}
)(SelectMealPlanForm)