import { connect } from "react-redux";
import OrderStatus from "../orderStatus";
import {getOrderStatuses} from '../../redux/Common/actions';

import {updateOrderStatus} from '../../redux/Order/actions';

export default connect(
    ({ orderStatuses }) => ({ orderStatuses }),
    { getOrderStatuses, updateOrderStatus }
)(OrderStatus)
