import { Route } from "react-router-dom";
import { Suspense } from "react";
import { ADMIN_PATHS } from "../index.enum";

import { BlogsListVies } from "./list";
import { BlogCreateView } from "./create";
import { BlogUpdateView } from "./update";

export const BLOG_ROUTES = [
  <Route
    path={ADMIN_PATHS.BLOGS_LIST}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <BlogsListVies />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.BLOG_CREATE}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <BlogCreateView />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.BLOG_UPDATE + "/:id"}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <BlogUpdateView />
      </Suspense>
    }
  />,
];
