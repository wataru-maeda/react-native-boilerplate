export interface IUser {
  name: string;
  email: string;
}

export interface IAppState {
  checked: boolean;
  loggedIn: boolean;
  user?: IUser;
}
