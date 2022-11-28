import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const apiCall = axios.create();
apiCall.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const testFn = async () => {
  return await apiCall.get("/users");
};

export default function TestRQ() {
  const [controller, setController] = useState(true);
  const { data } = useQuery({
    queryKey: ["test", controller],
    queryFn: testFn,
    onSuccess: () => {
      console.log("query OK");
    },
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });
  const queryClient = useQueryClient();
  console.log(data);
  console.log("queryClient", queryClient);
  return (
    <div>
      <h2>Use Query Test</h2>
      <button onClick={() => setController((prev) => !prev)}>Get</button>
      {data?.data
        ? data.data.map((el, idx) => (
            <div key={el.id}>
              <h3>{el.name}</h3>
              <p>{el.username}</p>
              <p>{el.email}</p>
            </div>
          ))
        : null}
    </div>
  );
}
