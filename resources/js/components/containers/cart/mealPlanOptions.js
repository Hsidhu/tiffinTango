import { connect } from "react-redux";
import MealPlanOptions from "../../cart/mealPlanOptions";
import { selectMealPlanOption } from '../../../redux/Cart/actions';
export default connect(
    ({ cart }) => ({ cart }),
    { selectMealPlanOption }
)(MealPlanOptions)