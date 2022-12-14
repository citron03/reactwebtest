import { useCallback, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addOrderAction } from "../actions/ordersAction";

const DispatchTest = ({ onAction, addOrderAction }) => {
  const [strData, setStrData] = useState("");

  const handleClick = useCallback(() => {
    console.log(strData);
    onAction(strData);
  }, [strData, onAction]);

  return (
    <div>
      <label>Text Input</label>
      <input
        placeholder="text"
        type="text"
        value={strData}
        onChange={(e) => setStrData(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Apply</button>
      <button onClick={() => addOrderAction("APPLE")}>ADD APPLE</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addOrderAction }, dispatch);

export default connect(() => ({}), mapDispatchToProps)(DispatchTest);
