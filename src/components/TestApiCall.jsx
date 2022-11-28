import { useState } from "react";
import apiCall from "../api/testApi";
// import getTestApi from "../api/getTestApi";
import DummyComponent from "./DummyComponent";

export default function TestApiCall() {
  const [response, setResponse] = useState("NULL");
  //   const apiCall = getTestApi();

  const handleGet = async () => {
    try {
      const res = await apiCall.get("http://localhost:3105/test");
      setResponse(JSON.stringify(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleGet}>GET REQUEST</button>
      <h3>RESPONSE: {response}</h3>
      <DummyComponent apiCall={apiCall} />
    </div>
  );
}
