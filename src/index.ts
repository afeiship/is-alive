const options = {
  method: 'HEAD',
  headers: {
    'user-agent': 'Mozilla/5.0 aric.zheng.is-alive/1.x',
  },
};

interface IsAliveResponse {
  code: number;
  success: boolean;
}

export default (inUrl?: string): Promise<IsAliveResponse> => {
  const url = inUrl || 'https://www.baidu.com';
  const urli = new URL(url);
  const request = require(urli.protocol.slice(0, -1));
  return new Promise((resolve, reject) => {
    request
      .request(url, options, (res) => {
        const code = res.statusCode;
        const success = code >= 1 && code < 400;
        resolve({ code, success });
      })
      .on('error', (err) => {
        reject({ code: -1, success: false });
      })
      .end();
  });
};
