import { User } from '@/types';

/**
 * fake promise function
 */
export async function fetchUser(): Promise<User> {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { name: 'test user', email: 'testuser@test.com' };
  } catch (err) {
    return Promise.reject(err);
  }
}
