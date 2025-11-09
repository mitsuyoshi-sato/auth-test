import { auth0 } from "../../lib/auth0";
import ClientDashboard from "./clientDashboard";

export default async function Dashboard() {
  const session = await auth0.getSession();
  return (
    <div className="py-6 px-24">
      <div className="text-2xl font-bold"> Dashboard Page</div>
      <div>{session?.user?.name}</div>
      <ClientDashboard />
    </div>
  );
}
