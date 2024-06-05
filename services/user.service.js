export async function fetchUser(user_id) {
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

  return await res.json();
}
