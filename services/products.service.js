import uuid from "react-native-uuid";

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

export async function CheckoutProduct(id, product) {
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

export async function PostProduct(product) {
  try {
    await fetch("https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/products", {
      method: "POST",
      body: JSON.stringify({
        id: uuid.v4(),
        ...product,
      }),
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    });
    return await fetchProducts();
  } catch (error) {
    console.error("Failed to add product", error);
  }
}

// Delete a product

export async function FetchDeleteProduct(id) {
  try {
    const res = await fetch(
      `https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/products?id=eq.${id}`,
      {
        method: "DELETE",
        headers: {
          apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }

    // La suppression est réussie, retournez la réponse (c'est généralement vide pour les suppressions)
    return await fetchProducts();
  } catch (error) {
    console.error("Failed to delete product", error);
    throw error; // Rejeter l'erreur pour la gérer correctement dans le composant appelant
  }
}

// Update a product

export async function FetchUpdateProduct(id, product) {
  try {
    await fetch(
      `https://txksgqhvbibpznqsmjqh.supabase.co/rest/v1/products?id=eq.${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          ...product,
        }),
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
        },
      }
    );
    return await fetchProducts();
  } catch (error) {
    console.error("Failed to add product", error);
  }
}
