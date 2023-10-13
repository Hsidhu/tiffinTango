import { connect } from "react-redux";
import CustomerDetailForm from "../../cart/customerDetailForm";
import { getMealPlanForOrder, getDeliveryCharge, placeOrder } from '../../../redux/Cart/actions';


export default connect(
    ({ orderData, cart }) => ({ orderData, cart }),
    { getMealPlanForOrder, getDeliveryCharge, placeOrder }
)(CustomerDetailForm)
