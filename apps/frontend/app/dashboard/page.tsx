import { client } from "../../lib/client";

export default async function Dashboard() {
  const response = await client.dashboard.$get();
  const data = await response.json();
  return <div>{data.message}</div>;
}
