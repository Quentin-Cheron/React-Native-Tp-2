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

export async function PostProduct(id) {
  // ajoute le produit dans l'objet du usser connecté
  const res = await fetch(
    `https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/profiles?select=*,products(*)&id=eq.${id}`,
    {
      method: "POST",
      body: JSON.stringify({
        name: "New Product",
        price: 100,
      }),
      headers: {
        apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    }
  );

  return await res.json();
}
