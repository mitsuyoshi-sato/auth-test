import { auth0 } from "../../lib/auth0";
import ClientDashboard from "./clientDashboard";

export default async function Dashboard() {
  const session = (await auth0.getSession()) ?? null;
  const orgId =
    (session as any)?.org_id ?? (session as any)?.user?.org_id ?? null;

  return (
    <div className="py-6 px-24">
      <div className="text-2xl font-bold"> Dashboard Page</div>
      <div className="mt-4 space-y-1">
        <div>name: {session?.user?.name ?? "null"}</div>
        <div>email: {session?.user?.email ?? "null"}</div>
        <div>org_id: {orgId ?? "null"}</div>
      </div>
      <ClientDashboard />
    </div>
  );
}
