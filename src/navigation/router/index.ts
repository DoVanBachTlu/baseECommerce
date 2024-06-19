import Splash from '@src/screens/Splash';
import {screenName} from './ScreenName';
import Home from '@src/screens/Home';
import Account from '@src/screens/Account';
import Detail from '@src/screens/Detail';

export const Routers = {
  splash: {
    name: screenName.splash,
    component: Splash,
  },
  home: {
    name: screenName.home,
    component: Home,
  },
  account: {
    name: screenName.account,
    component: Account,
  },
  detail: {
    name: screenName.detail,
    component: Detail,
  },
};
