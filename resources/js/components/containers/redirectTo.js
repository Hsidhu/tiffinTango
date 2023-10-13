import { connect } from "react-redux";
import RedirectTo from "../redirectTo";

export default connect(
    ({ redirectTo }) => ({ redirectTo }),
    { }
)(RedirectTo)
