"use client";

import { useAccount, usePasskeyAuth } from "jazz-react";
import { Button } from "./@/ui/button";
import { APPLICATION_NAME } from "./Main";

export function AuthButton() {
  const { logOut } = useAccount();

  const auth = usePasskeyAuth({
    appName: APPLICATION_NAME,
  });

  function handleLogOut() {
    logOut();
    window.history.pushState({}, "", "/");
  }

  if (auth.state === "signedIn") {
    return <Button text="Log out" onClick={handleLogOut} />;
  }

  return (
    <div className="flex gap-2">
      <Button text="Sign up" onClick={() => auth.signUp("")} />
      <Button text="Log in" onClick={() => auth.logIn()} />
    </div>
  );
}
