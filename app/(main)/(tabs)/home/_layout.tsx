import { Stack } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
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
  const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: () => <NavigationHeaderTitle />,
          headerLeft: () => <NavigationHeaderLeft  onPress={toggleDrawer} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
    </Stack>
  );
}