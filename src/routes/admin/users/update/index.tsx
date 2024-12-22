import { lazy } from "react";

export const UserUpdateView = lazy(
  () => import("../../../../pages/users/view/update")
);
