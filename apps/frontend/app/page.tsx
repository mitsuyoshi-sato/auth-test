import { auth0 } from "../lib/auth0";
import { cn } from "../lib/utils";

export default async function Home() {
  const session = (await auth0.getSession()) ?? null;

  console.log({ session });

  return (
    <div className="mt-[200px] w-fit mx-auto py-4 px-6 flex flex-col gap-2">
      <div className="p-2 rounded-md bg-blue-500 text-white px-10 text-center w-full mx-auto">
        <a href="/auth/login" className="w-full h-full">
          ログイン
        </a>
      </div>
      <div className="p-2 rounded-md text-blue-500 border border-blue-400 px-10 text-center w-full mx-auto">
        <a href="/auth/login?screen_hint=signup">サインアップ</a>
      </div>
      <div className="p-2 rounded-md text-amber-600 bg-amber-300/20 border border-amber-600 px-10 text-center w-full mx-auto">
        <a href="/auth/login?prompt=none&returnTo=/">メール認証しました</a>
      </div>
      <div>name: {session?.user?.name ?? "null"}</div>
      <div>email: {session?.user?.email ?? "null"}</div>
      <div>
        email_verified:
        <span
          className={cn(
            session?.user?.email_verified ? "text-green-500" : "text-red-500"
          )}
        >
          {String(session?.user?.email_verified)}
        </span>
      </div>
    </div>
  );
}
