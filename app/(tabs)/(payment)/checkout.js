import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

import Checkout from "../../../components/Checkout";
import Auth from "../../../components/Auth";
import { fetchCart } from "../../../services/checkout.service";
import { Button } from "react-native";

export default function CheckoutScreen() {
  const [session, setSession] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);

      fetchCart(session.user.id).then((data) => {
        setCart(data);
      });
    });
  };
  return session ? (
    <>
      <Button color="#06c167" title="refresh data" onPress={refreshData} />
      <Checkout data={cart} />
    </>
  ) : (
    <Auth />
  );
}
