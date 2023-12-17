import { auth } from "@/auth";
import { GoogleLoginBtn } from "./google-login-btn";
import { LogoutBtn } from "./logout-btn";

/**
 * A group of buttons for authentication methods.
 * when there is a session, it will show a logout button.
 * Add more buttons here for more authentication methods.
 */
export const AuthBtnGroup = async () => {
  const session = await auth();
  return <>{session ? <LogoutBtn /> : <GoogleLoginBtn />}</>;
};
