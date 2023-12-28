import { connect } from "react-redux";
import OrderDeliveryWindowUpdate from "../orderDeliveryWindowUpdate";
import {getDeliveryWindowsList} from '../../redux/Common/actions';

import {updateOrderStatus} from '../../redux/Order/actions';

export default connect(
    ({ deliveryWindows }) => ({ deliveryWindows }),
    { getDeliveryWindowsList, updateOrderStatus }
)(OrderDeliveryWindowUpdate)
