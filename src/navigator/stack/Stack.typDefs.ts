import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum StackNameList {
  home = 'HomeStack',
  details = 'DetailsStack',
  profile = 'ProfileStack',
  // add more...
}

export type StackParamList = {
  [StackNameList.home]: undefined;
  [StackNameList.details]: { from: string };
  [StackNameList.profile]: undefined;
  // add more...
};

export type HomeStackProps = NativeStackScreenProps<StackParamList, StackNameList.home>;
export type DetailsStackProps = NativeStackScreenProps<StackParamList, StackNameList.details>;
export type ProfileStackProps = NativeStackScreenProps<StackParamList, StackNameList.profile>;
// add more...
