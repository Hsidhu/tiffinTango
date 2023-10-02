import { connect } from "react-redux";
import OrderSummary from "../../cart/orderSummary";

export default connect(
    ({ cart }) => ({ cart }),
    {  }
)(OrderSummary)