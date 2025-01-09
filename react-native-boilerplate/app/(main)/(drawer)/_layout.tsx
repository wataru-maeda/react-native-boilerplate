import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: 'Home' }} />
      <Stack.Screen name="details" />
    </Stack>
  );
}
