export async function fetchCart(user_id) {
  const res = await fetch(
    `https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/profiles?id=eq.${user_id}`,
    {
      method: "GET",
      headers: {
        apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (res.ok) {
    const userData = await res.json();
    const cart = userData[0]?.cart || []; // Récupérer la colonne "cart" ou un tableau vide si elle n'existe pas
    return cart;
  } else {
    throw new Error("Failed to fetch user cart");
  }
}
