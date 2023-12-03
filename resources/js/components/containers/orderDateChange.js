import { connect } from "react-redux";
import OrderDateChange from "../orderDateChange";
import {updateOrderStatus} from '../../redux/Order/actions';

export default connect(
    ({  }) => ({  }),
    { updateOrderStatus }
)(OrderDateChange)
