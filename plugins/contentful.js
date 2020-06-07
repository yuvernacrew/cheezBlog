/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import * as contentful from 'contentful';

// contentfulの設定
// 設定自体は、Dotenvにて管理
const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
};

// contentfulの設定を返す
export default (config = defaultConfig) => {
  return contentful.createClient({
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CDA_ACCESS_TOKEN,
  });
};
