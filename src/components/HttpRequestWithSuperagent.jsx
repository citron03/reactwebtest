import superagent from "superagent";

const HttpRequestWithSuperagent = () => {
  const handlePostGet = async () => {
    superagent
      .post("http://localhost:3105/login")
      .send({
        email: "aaa@aaa.aaa",
        name: "qwe",
        password: "aaa111!!!",
      })
      .set("accept", "json")
      .end((err, res) => {
        if (err) {
          alert(`err: ${JSON.stringify(err)}`);
        } else {
          alert(`res: ${JSON.stringify(res.body.data)}`);
        }
      });
    const response = await superagent.get("http://localhost:3105/");
    console.log(response);
  };

  return (
    <div>
      <h1>Request SuperAgent</h1>
      <button onClick={handlePostGet}>POST & GET</button>
    </div>
  );
};

export default HttpRequestWithSuperagent;
