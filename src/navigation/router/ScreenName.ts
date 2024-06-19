export const screenName = {
  home: 'home',
  detail: 'detail',
  account: 'account',
  splash: 'splash',
};
export type TypeScreenName = (typeof screenName)[keyof typeof screenName];
