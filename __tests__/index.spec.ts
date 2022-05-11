import fn from '../src';

describe('api.basic', () => {
  test('response code should be number', async () => {
    const res = await fn('https://shebao.work/');
    console.log(res);

    expect(typeof res.code).toBe('number');
  });
});
