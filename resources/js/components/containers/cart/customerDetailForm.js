import { connect } from "react-redux";
import CustomerDetailForm from "../../cart/customerDetailForm";
import { getMealPlanForOrder } from '../../../redux/Cart/actions';

export default connect(
    ({ cart }) => ({ cart }),
    { getMealPlanForOrder }
)(CustomerDetailForm)