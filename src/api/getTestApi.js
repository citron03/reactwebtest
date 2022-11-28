import axios from "axios";

const getTestApi = () => {
  const apiCall = axios.create();

  console.log(
    "-------------------- apiCall function call !! -----------------------"
  );

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
  return apiCall;
};

export default getTestApi;
