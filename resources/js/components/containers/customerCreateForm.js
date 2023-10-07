import { connect } from "react-redux";
import CustomerCreateForm from "../customerCreateForm";
import { getDeliveryCharge, placeOrder } from '../../redux/Cart/actions';

export default connect(
    ({ orderData, cart }) => ({ orderData, cart }),
    { getDeliveryCharge, placeOrder }
)(CustomerCreateForm)
