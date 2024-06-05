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
