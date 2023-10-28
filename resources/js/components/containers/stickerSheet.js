import { connect } from "react-redux";
import StickerSheet from "../StickerSheet";

export default connect(
    ({ dailyDeliveries }) => ({ dailyDeliveries }),
    { }
)(StickerSheet)
