import cookies from "js-cookie";
import { request } from "@config/api";
// import { getUser } from "@lib/authenticate";
import { USERS_API } from "@lib/api-endpoints";

import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export function getUser(url) {
  const user = cookies.get("user");
  if (user) {
    const userParse = JSON.parse(decodeURIComponent(user));
    return request.get(`${url}/${userParse.id}`).then((res) => res.data);
  }
  return null;
}
export default function useUser({
  redirectTo = undefined,
  redirectIfFound = false,
} = {}) {
  const { data, mutate: mutateUser } = useSWR(`${USERS_API}`, getUser);
  console.log(data);
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !data) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !data) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && data)
    ) {
      Router.push(redirectTo);
    }
  }, [data, redirectIfFound, redirectTo]);

  return { user: data, mutateUser };
}
