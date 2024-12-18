import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { supabase } from "./supabase";
import type { Session } from "@supabase/supabase-js";
import { useAtom } from "jotai";
import { userAtom } from "./store/auth";
import SignUpView from './pages/sign-up/view/sign-up'
import LoginView from "./pages/login/view/login";
import DefaultLayout from "./layouts/default";
import AuthLayout from "./layouts/auth";
import UsersView from "./pages/users/view/users-list";
import UserCreateView from "./pages/users/view/create";
import UserUpdateView from "./pages/users/view/update";
import BlogView from "./pages/blogs/view/blogs-list";
import AuthGuard from "./components/rout-guards/auth";


function App() {
  const [, setUser] = useAtom<Session | null>(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // console.log("session:", session);

      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthGuard><DefaultLayout /></AuthGuard>}>
         
          <Route path="/users" element={<UsersView />} />
          <Route path="/user/create" element={<UserCreateView />} />
          <Route path="/users/edit/:id" element={<UserUpdateView />} />
          <Route path="/blogs" element={<BlogView />} />
          {/* <Route path="/user/create" element={<UserCreateView />} /> */}
          {/* <Route path="/users/edit/:id" element={<UserUpdateView />} /> */}
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="signup" element={<SignUpView />} />
          <Route path="login" element={<LoginView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
