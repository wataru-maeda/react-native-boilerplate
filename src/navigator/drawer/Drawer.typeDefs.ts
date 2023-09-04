import { DrawerScreenProps } from '@react-navigation/drawer';

export enum DrawerNameList {
  main = 'MainDrawer',
  // add more...
}

export type DrawerParamList = {
  [DrawerNameList.main]: undefined;
  // add more...
};

export type MainDrawerProps = DrawerScreenProps<DrawerParamList, DrawerNameList.main>;
// add more...
