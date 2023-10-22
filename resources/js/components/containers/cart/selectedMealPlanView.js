import { connect } from "react-redux";
import SelectedMealPlanView from "../../cart/selectedMealPlanView";

export default connect(
    ({ cart, selectedMealPlan }) => ({ cart, selectedMealPlan }),
    {  }
)(SelectedMealPlanView)