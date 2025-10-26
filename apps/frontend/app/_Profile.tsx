"use client";
import { useUser } from "@auth0/nextjs-auth0";

export default function _Profile() {
  const { user, isLoading } = useUser();
  console.log({ user, isLoading });
  return (
    <>
      {isLoading && <p>Loading...</p>}

      <div style={{ textAlign: "center" }}>
        <h2>name: {user?.name}</h2>
        <p>email: {user?.email}</p>
      </div>
    </>
  );
}
