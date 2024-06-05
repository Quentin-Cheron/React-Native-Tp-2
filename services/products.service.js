import uuid from "react-native-uuid";

function generateUUID(digits) {
  let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ";
  let uuid = [];
  for (let i = 0; i < digits; i++) {
    uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join("");
}

export async function fetchProducts() {
  const res = await fetch(
    "https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/products",
    {
      method: "GET",
      headers: {
        apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    }
  );

  return await res.json();
}

export async function PostProduct(id, product) {
  // Récupere les produits du panier de l'utilisateur

  const res = await fetch(
    `https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/profiles?id=eq.${id}`,
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
    const cart = userData[0].cart;
    const data = [...cart, { id: uuid.v4(), ...product }];

    await fetch(
      `https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/profiles?id=eq.${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id,
          cart: [...data],
        }),
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
        },
      }
    );
  } else {
    console.error("Failed to fetch user data");
  }
}
