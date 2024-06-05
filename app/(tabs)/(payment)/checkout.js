import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";

import Checkout from "../../../components/Checkout";
import Auth from "../../../components/Auth";
import { fetchCart } from "../../../services/checkout.service";

export default function CheckoutScreen() {
  const [session, setSession] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);

      fetchCart(session.user.id).then((data) => {
        setCart(data);
      });
    });
  }, []);
  return session ? <Checkout data={cart} /> : <Auth />;
}
