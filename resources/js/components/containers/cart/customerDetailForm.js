import { connect } from "react-redux";
import CustomerDetailForm from "../../cart/customerDetailForm";
import { getMealPlanForOrder, getDeliveryCharge, placeOrder, nextStep, prevStep } from '../../../redux/Cart/actions';


export default connect(
    ({ orderType, orderData, cart }) => ({orderType, orderData, cart }),
    { getMealPlanForOrder, getDeliveryCharge, placeOrder, nextStep, prevStep }
)(CustomerDetailForm)
