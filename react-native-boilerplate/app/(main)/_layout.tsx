import { Drawer } from 'expo-router/drawer';

export default function DrawerWithTabsLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="(tabs)/home" options={{ title: 'Tabs' }} />
    </Drawer>
  );
}