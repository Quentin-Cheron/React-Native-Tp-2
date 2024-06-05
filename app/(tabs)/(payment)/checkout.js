import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";

import Checkout from "../../../components/Checkout";
import Auth from "../../../components/Auth";

export default function CheckoutScreen() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return session ? <Checkout /> : <Auth />;
}
