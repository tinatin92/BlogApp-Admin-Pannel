import { lazy } from "react";


export const BlogsListVies = lazy(
  () => import("../../../../pages/blogs/view/blogs-list")
);
