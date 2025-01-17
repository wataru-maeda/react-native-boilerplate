import { Stack } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import NavigationHeaderLeft from '@/components/layouts/NavigationHeaderLeft'
import NavigationHeaderTitle from '@/components/layouts/NavigationHeaderTitle'
import { useNavigation } from 'expo-router'
import { colors } from '@/theme';

const screenOptions = {
  headerTintColor: colors.white,
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
};

export default function HomeStackLayout() {
  const navigation = useNavigation()
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen
        name="index"
        options={{
          // headerLeft: () => <DrawerToggleButton />,
          title: 'Home',
          headerTitle: () => <NavigationHeaderTitle />,
          headerLeft: () => <NavigationHeaderLeft  onPress={() => {}} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
    </Stack>
  );
}