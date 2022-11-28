import { useEffect } from "react";
import apiCalll from "../api/testApi";
// import getTestApi from "../api/getTestApi";

const DummyComponent = ({ apiCall }) => {
  //   const apiCalll = getTestApi();
  useEffect(() => {
    console.log("is it same?", apiCall === apiCalll);
    const call = async () => {
      const res = await apiCall.get("http://localhost:3105/test");
      console.log("Child res", res);
    };
    call();
  }, []);
  return (
    <div>
      <p>Dummy</p>
    </div>
  );
};

export default DummyComponent;
