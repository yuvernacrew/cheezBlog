const contentful = require('contentful');

// contentfulの設定
// 設定自体は、Dotenvにて管理
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
};

// contentfulの設定を返す
const createClient = () => {
  return contentful.createClient(config);
};

export default createClient();
