import { connect } from "react-redux";
import AssignZoneToAddress from "../assignZoneToAddress";
import { assignAddressToZone } from '../../redux/DeliveryZone/actions';

export default connect(
    ({ deliveryZoneList }) => ({ deliveryZoneList }),
    { assignAddressToZone }
)(AssignZoneToAddress)
