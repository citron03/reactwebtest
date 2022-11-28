import axios from "axios";

const apiCall = axios.create();

apiCall.defaults.baseURL = "http://localhost:3105";

console.log("-------------------- apiCall awake !! -----------------------");

apiCall.interceptors.request.use(
  (request) => {
    // throw Error("REQUEST ERROR !!!"); // 에러 테스트
    console.log("request OK");
    return request;
  },
  (error) => {
    console.log("request ERROR", error);
    return Promise.reject(error);
  }
);

apiCall.interceptors.response.use(
  (response) => {
    console.log("response OK");
    return response;
  },
  (error) => {
    const { config, response } = error;
    console.log("response ERROR", config, "\n", response);
    return Promise.reject(error);
  }
);

export default apiCall;
