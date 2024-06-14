import React, { useEffect, useState } from "react";
import Auth from "../../components/Auth";
import Home from "../../components/Home";
import { supabase } from "../../lib/supabase";

export default function HomeScreen() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  };

  return session ? <Home /> : <Auth />;
}
