import cookies from "js-cookie";
import { request } from "@config/api";
import { USERS_API } from "./api-endpoints";

export async function login({ username, password }) {
  const { data } = await request.get(`${USERS_API}/${username}`, {});
  if (data) {
    cookies.set("user", data, { expires: 60 });
    // request.defaults.headers.Authorization = `${token_type} ${access_token}`;
  }
}

export const logout = () => {
  cookies.remove("user");
  // delete request.defaults.headers.Authorization;
};
