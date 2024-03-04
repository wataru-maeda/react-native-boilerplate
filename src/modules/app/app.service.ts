import { IUser } from './app.typeDefs';

export function useAppService() {
  /**
   * fake promise function to simulate async function
   */
  async function getUser(): Promise<IUser> {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      return { name: 'test user', email: 'testuserr@test.com' };
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return { getUser };
}
