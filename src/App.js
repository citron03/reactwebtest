import "./App.css";
import Form from "./components/Form";
import HttpRequestWithKy from "./components/HttpRequestWithKy";
import HttpRequestWithSuperagent from "./components/HttpRequestWithSuperagent";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/reducer";
import ReduxTest from "./components/ReduxTest";

function App() {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <Form />
      <HttpRequestWithKy />
      <HttpRequestWithSuperagent />
      <ReduxTest />
    </Provider>
  );
}

export default App;
