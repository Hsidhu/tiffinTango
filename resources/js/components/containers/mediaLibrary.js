import { connect } from "react-redux";
import MediaLibrary from "../mediaLibrary";
import { uploadFile } from "../../redux/Media/actions";

export default connect(
    ({  }) => ({  }),
    {uploadFile }
)(MediaLibrary)
