import "./App.css";
import { useEffect } from "react";
import { supabase } from "./supabase";
import type { Session } from "@supabase/supabase-js";
import { useAtom } from "jotai";
import { userAtom } from "./store/auth";

import AppRoutes from "./routes";

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
      <AppRoutes />
    </>
  );
}

export default App;
