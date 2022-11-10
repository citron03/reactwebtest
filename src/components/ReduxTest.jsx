import { useSelector, useDispatch, connect } from "react-redux";
import { addOrderAction } from "../actions/ordersAction";

function ReduxTest({ orders }) {
  //   const state = useSelector((state) => state.ordersReducer);
  //   const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>{JSON.stringify(state)}</h1>
      <button onClick={() => dispatch(addOrderAction("APPLE"))}>ADD</button> */}
      <h2>use connect</h2>
      <h3>{JSON.stringify(orders)}</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
});

export default connect(mapStateToProps)(ReduxTest);
