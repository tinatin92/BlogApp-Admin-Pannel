import { lazy } from "react";

export const UsersListView = lazy(
  () => import("../../../../pages/users/view/users-list")
);
