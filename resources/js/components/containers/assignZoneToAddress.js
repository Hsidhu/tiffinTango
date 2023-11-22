import { connect } from "react-redux";
import AssignZoneToAddress from "../assignZoneToAddress";
import { getDeliveryZoneList, assignAddressToZone } from '../../redux/DeliveryZone/actions';

export default connect(
    ({ deliveryZoneList }) => ({ deliveryZoneList }),
    { getDeliveryZoneList, assignAddressToZone }
)(AssignZoneToAddress)
