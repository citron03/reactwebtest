import { bindActionCreators } from "redux";
import { useSelector, useDispatch, connect } from "react-redux";
import { addOrderAction } from "../actions/ordersAction";
import DispatchTest from "./DispatchTest";

function ReduxTest({ orders, addOrderAction }) {
  //   const state = useSelector((state) => state.ordersReducer);
  //   const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>{JSON.stringify(state)}</h1>
      <button onClick={() => dispatch(addOrderAction("APPLE"))}>ADD</button> */}
      <h2>use connect</h2>
      <h3>{JSON.stringify(orders)}</h3>
      <DispatchTest onAction={addOrderAction} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
});

// const mapDispatchToProps = (dispatch) => ({
//   onAddOrderAction: (data) => dispatch(addOrderAction(data)),
// });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addOrderAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
