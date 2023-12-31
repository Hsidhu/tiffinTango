import { connect } from "react-redux";
import OrderStatus from "../orderStatus";

import {updateOrderStatus} from '../../redux/Order/actions';

export default connect(
    ({ orderStatuses }) => ({ orderStatuses }),
    { updateOrderStatus }
)(OrderStatus)
