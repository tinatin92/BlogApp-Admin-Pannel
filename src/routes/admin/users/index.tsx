import { Route } from "react-router-dom";
import { Suspense } from "react";
import { ADMIN_PATHS } from "../index.enum";
import { UsersListView } from "./list";
import { UserCreateView } from "./create";
import { UserUpdateView } from "./update";




export const USER_ROUTES = [
  <Route
    path={ADMIN_PATHS.USERS_LIST}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <UsersListView />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.USER_CREATE}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <UserCreateView />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.USER_UPDATE + "/:id"}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <UserUpdateView />
      </Suspense>
    }
  />,
];
