import { connect } from "react-redux";
import MealPlanOptions from "../../cart/mealPlanOptions";
import { selectMealPlanOption } from '../../../redux/Cart/actions';
export default connect(
    ({ orderData, cart }) => ({ orderData, cart }),
    { selectMealPlanOption }
)(MealPlanOptions)