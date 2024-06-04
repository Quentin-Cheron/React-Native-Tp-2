import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import Account from "../../components/Account";
import { View } from "react-native";
import Checkout from "../../components/Checkout";

export default function CheckoutScreen() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Checkout />
      )}
    </View>
  );
}
