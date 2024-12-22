import { Route, Routes } from "react-router-dom";
import AuthGuard from "../components/rout-guards/auth";
import DefaultLayout from "../layouts/default";
import { ADMIN_ROUTES } from "./admin";
import AuthLayout from "../layouts/auth";
import { AUTH_ROUTES } from "./auth";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard>
              <DefaultLayout />
            </AuthGuard>
          }
        >
          {ADMIN_ROUTES}
        </Route>

        <Route path="/" element={<AuthLayout />}>
          {AUTH_ROUTES}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
