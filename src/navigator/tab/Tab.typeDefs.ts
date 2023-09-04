import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type TabBarStatus = {
  focused: boolean;
  color: string;
  size: number;
};

export enum TabNameList {
  home = 'HomeTab',
  profile = 'ProfileTab',
  // add more...
}

export type TabParamList = {
  [TabNameList.home]: undefined;
  [TabNameList.profile]: undefined;
  // add more...
};

export type HomeTabProps = BottomTabScreenProps<TabParamList, TabNameList.home>;
export type ProfileTabProps = BottomTabScreenProps<TabParamList, TabNameList.profile>;
// add more...
