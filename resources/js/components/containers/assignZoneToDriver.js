import { connect } from "react-redux";
import AssignZoneToDriver from "../assignZoneToDriver";
import { getDriverSelect } from '../../redux/Driver/actions';
import { assignDriverToZone } from '../../redux/DeliveryZone/actions';

export default connect(
    ({ driverSelect }) => ({ driverSelect }),
    { getDriverSelect, assignDriverToZone }
)(AssignZoneToDriver)
