import { getToken, removeToken } from "@/utils/authToken";
import { ROUTER_PATH } from "@/const";
import useAuth from "@/store/auth";

export function auth(context, type) {
  const { next, meta } = context;
  const token = getToken(type);
  const authState = useAuth();
  if (token) {
    authState.isAuthenticated = true;
    return next();
  }
  authState.isAuthenticated = false;
  removeToken();
  next({ path: ROUTER_PATH.LOGIN, meta });
}
