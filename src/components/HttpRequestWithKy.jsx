import { useState } from "react";
import ky from "ky";

const HttpRequestWithKy = () => {
  const [response, setResponse] = useState("");
  const handlePostClick = async () => {
    const response = await ky
      .post("http://localhost:3105/login", {
        json: {
          email: "aaa@aaa.aaa",
          name: "qwe",
          password: "aaa111!!!",
        },
      })
      .json();
    setResponse(JSON.stringify(response));
  };
  return (
    <div>
      <h1>KY Test</h1>
      <div>
        <h3>POST TEST</h3>
        <button onClick={handlePostClick}>POST REQUEST</button>
        {response ? <div role="alert">{response}</div> : null}
      </div>
    </div>
  );
};

export default HttpRequestWithKy;
