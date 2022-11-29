import { useQueryClient } from "@tanstack/react-query";

export default function A() {
  const queryClient = useQueryClient();
  console.log("queryClient", queryClient);
  return (
    <div>
      <h1>index.js</h1>
      <h3>Can use react-query global state?</h3>
      <br />
      <h4>{JSON.stringify(queryClient.getQueriesData("test"))}</h4>
      <h3>Nope, No re-rendering</h3>
    </div>
  );
}
