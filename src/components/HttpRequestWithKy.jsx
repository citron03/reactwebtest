import ky from "ky";

const HttpRequestWithKy = () => {
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
    alert(JSON.stringify(response));
  };
  return (
    <div>
      <h1>KY Test</h1>
      <div>
        <h3>POST TEST</h3>
        <button onClick={handlePostClick}>POST REQUEST</button>
      </div>
    </div>
  );
};

export default HttpRequestWithKy;
