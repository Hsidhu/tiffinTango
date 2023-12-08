import { connect } from "react-redux";
import CustomerDetailForm from "../../cart/customerDetailForm";
import { getMealPlanForOrder, getDeliveryCharge, placeOrder } from '../../../redux/Cart/actions';


export default connect(
    ({ orderType, orderData, cart }) => ({orderType, orderData, cart }),
    { getMealPlanForOrder, getDeliveryCharge, placeOrder }
)(CustomerDetailForm)
