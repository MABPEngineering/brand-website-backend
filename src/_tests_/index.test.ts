import { describe, expect, it, beforeEach } from 'bun:test';
import app from '../index';

describe('[Get request to "/"]', () => {
  let req, res: Response;

  const usersMock = [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Adrian' },
    { id: 2, name: 'Roma' },
  ];

  const requestURL = 'http://localhost/users';

  beforeEach(async () => {
    req = new Request(requestURL);
    res = await app.fetch(req);
  });

  it('should return 200 Response', async () => {
    expect(res.status).toBe(200);
  });

  it('should return users array', async () => {
    const usersResponse = await res.json();
    expect(usersResponse).toEqual(usersMock);
  });
});
