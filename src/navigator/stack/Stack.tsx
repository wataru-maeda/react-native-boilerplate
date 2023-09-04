import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNameList, StackParamList } from './Stack.typDefs';
import { MainDrawerProps } from '../drawer/Drawer.typeDefs';
import { colors } from '@theme';
import Home from '@views/Home';
import Details from '@views/Details';
import Profile from '@views/Profile';
import { StackHeaderLeft, StackHeaderTitle } from './components';

const Stack = createNativeStackNavigator<StackParamList>();

const navigationProps = {
  headerTintColor: colors.white,
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
};

export function HomeStackNavigator({ navigation }: MainDrawerProps) {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        component={Home}
        name={StackNameList.home}
        options={{
          title: 'Home',
          headerTitle: () => <StackHeaderTitle />,
          headerLeft: () => <StackHeaderLeft onPress={() => navigation.toggleDrawer()} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        component={Details}
        name={StackNameList.details}
        options={{
          title: 'Details',
          headerTitle: () => <StackHeaderTitle />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export function ProfileStackNavigator({ navigation }: MainDrawerProps) {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        component={Profile}
        name={StackNameList.profile}
        options={{
          title: 'Profile',
          headerTitle: () => <StackHeaderTitle />,
          headerLeft: () => <StackHeaderLeft onPress={() => navigation.toggleDrawer()} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        component={Details}
        name={StackNameList.details}
        options={{
          title: 'Details',
          headerTitle: () => <StackHeaderTitle />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
