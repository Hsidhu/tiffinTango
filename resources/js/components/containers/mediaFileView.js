import { connect } from "react-redux";
import MediaFileView from "../mediaFileView";
import { getMediaFiles } from "../../redux/Media/actions";

export default connect(
    ({ mediaFiles }) => ({ mediaFiles }),
    {getMediaFiles }
)(MediaFileView)
