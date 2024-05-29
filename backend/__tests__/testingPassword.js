import bcrypt from 'bcrypt';
import { verifyPassword } from '../controllers/auth';
import { jest } from '@jest/globals';

describe('verifyPassword', () => {
  let inputPassword;
  let storedPassword;

  beforeAll(async () => {
 
    inputPassword = 'mySecretPassword';
    storedPassword = await bcrypt.hash(inputPassword, 10);
  });

  test('should return true for correct password', async () => {
    const result = await verifyPassword(inputPassword, storedPassword);
    expect(result).toBe(true);
  });

  test('should return false for incorrect password', async () => {
    const result = await verifyPassword('wrongPassword', storedPassword);
    expect(result).toBe(false);
  });

  test('should throw an error if bcrypt throws an error', async () => {

    const originalCompare = bcrypt.compare;
    bcrypt.compare = jest.fn().mockImplementation(() => {
      throw new Error('bcrypt error');
    });

    await expect(verifyPassword(inputPassword, storedPassword)).rejects.toThrow('bcrypt error');

    bcrypt.compare = originalCompare;
  });
});