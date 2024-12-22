import { Route } from "react-router-dom";

import { AUTH_PATH } from "../index.enum";
import { LoginView } from "./login-view";
import { Suspense } from "react";

export const AUTH_LOGIN = [
  <Route
    path={AUTH_PATH.LOGIN}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <LoginView />
      </Suspense>
    }
  />
];
