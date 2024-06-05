import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="+not-found"
        options={{
          headerShown: true,
          title: "Page Not Found", // Change this to the desired name
        }}
      />
    </Stack>
  );
}
