import { connect } from "react-redux";
import OrderUpdateComment from "../orderUpdateComment";
import {updateOrderStatus} from '../../redux/Order/actions';

export default connect(
    ({  }) => ({  }),
    { updateOrderStatus }
)(OrderUpdateComment)
