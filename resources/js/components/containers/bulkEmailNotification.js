import { connect } from "react-redux";
import BulkEmailNotification from "../bulkEmailNotification";
import { bulkEmail } from "../../redux/Marketing/actions";

export default connect(
    ({  }) => ({  }),
    { bulkEmail }
)(BulkEmailNotification)
