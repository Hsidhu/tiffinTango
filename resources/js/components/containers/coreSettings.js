import { connect } from "react-redux";
import CoreSettings from "../coreSettings";
import { getSettings, saveSettings } from '../../redux/Settings/actions';

export default connect(
    ({ settings }) => ({ settings }),
    { getSettings, saveSettings }
)(CoreSettings)
