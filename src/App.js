import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./components/Form";
import HttpRequestWithKy from "./components/HttpRequestWithKy";
import HttpRequestWithSuperagent from "./components/HttpRequestWithSuperagent";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/reducer";
import ReduxTest from "./components/ReduxTest";
import TestApiCall from "./components/TestApiCall";
import Components from "./components";
import TestType from "components/TestType";
import TestRQ from "components/TestRQ";

function App() {
  const store = createStore(reducer);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <Form /> */}
        {/* <HttpRequestWithKy /> */}
        {/* <HttpRequestWithSuperagent /> */}
        {/* <ReduxTest /> */}
        <Components />
        {/* <TestApiCall /> */}
        {/* <TestType /> */}
        <TestRQ />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
