import {
  NavigationContainerRefWithCurrent,
  NavigationState,
  ParamListBase,
  PartialState,
  Route,
} from '@react-navigation/native';
import {TypeScreenName} from './router/ScreenName';

export interface IConfigNavigate {
  routerName: TypeScreenName;
  key?: string;
  params?: ParamList[TypeScreenName];
  merge?: boolean;
}
export interface IConfigBack {}

export interface IConfigReset extends PartialState<NavigationState> {}

export interface ParamList extends ParamListBase {}

export type INavigation = NavigationContainerRefWithCurrent<ParamListBase>;

export interface INavigationService {
  reset: (state: IConfigReset | NavigationState) => void;
  navigate: (config: IConfigNavigate) => void;
  goBack: (config: IConfigBack) => void;
}
