import { connect } from "react-redux";
import CustomerCreateForm from "../customerCreateForm";
import { getDeliveryCharge, placeOrder } from '../../redux/Cart/actions';
import { getDeliveryWindows } from "../../redux/Common/actions";

export default connect(
    ({ orderData, cart, deliveryWindows }) => ({ orderData, cart, deliveryWindows }),
    { getDeliveryWindows, getDeliveryCharge, placeOrder }
)(CustomerCreateForm)
