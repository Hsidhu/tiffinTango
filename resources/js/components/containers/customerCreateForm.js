import { connect } from "react-redux";
import CustomerCreateForm from "../customerCreateForm";
import { getDeliveryCharge, placeOrder } from '../../redux/Cart/actions';
import { getDeliveryWindowsList } from "../../redux/Common/actions";

export default connect(
    ({ orderData, cart, deliveryWindows }) => ({ orderData, cart, deliveryWindows }),
    { getDeliveryWindowsList, getDeliveryCharge, placeOrder }
)(CustomerCreateForm)
