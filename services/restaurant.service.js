export async function fetchRestaurants() {
  const res = await fetch(
    "https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/restaurants",
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

export async function fetchSpecificRestaurants(id) {
  const res = await fetch(
    `https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/restaurants?id=eq.${id}`,
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
