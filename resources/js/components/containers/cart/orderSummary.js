import { connect } from "react-redux";
import OrderSummary from "../../cart/orderSummary";

export default connect(
    ({ orderData, cart }) => ({ orderData, cart }),
    {  }
)(OrderSummary)