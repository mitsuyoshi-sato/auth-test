"use server";

import { redirect } from "next/navigation";
import { getToken } from "../lib/auth0";

export const sample = async () => {
  try {
    const token = await getToken();
    console.log({ token });
    return { status: 200 };
  } catch (error) {
    console.error(error);
    redirect("/auth/login?prompt=login");
  }
};
