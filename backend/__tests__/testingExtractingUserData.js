import { extractUserData } from '../controllers/auth';

describe('extractUserData', () => {
  it('should extract user data from input object', () => {
    const inputData = {
      username: 'vlxd',
      email: 'vlad.ciubuc616@gmail.com',
      password: 'password123'
    };

    const extractedData = extractUserData(inputData);

    expect(extractedData).toEqual({
      username: 'vlxd',
      email: 'vlad.ciubuc616@gmail.com',
      password: 'password123'
    });
  });
});