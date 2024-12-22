import { lazy } from "react";

export const BlogCreateView = lazy(
  () => import("../../../../pages/blogs/view/create")
);
