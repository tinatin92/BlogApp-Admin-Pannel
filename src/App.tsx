// import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { supabase } from "./supabase";
import type { Session } from "@supabase/supabase-js";
import { useAtom } from "jotai";
import { userAtom } from "./store/auth";
// import SignUpView from './pages/sign-up/view/sign-up'
import LoginView from "./pages/login/view/login";

function App() {
  const [, setUser] = useAtom<Session | null>(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session:", session);

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
    /*   <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="author/:1d" element={<AuthorPage />} />
      </Route>
    </Routes> */
    <LoginView />
  );
}

export default App;
