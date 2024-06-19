import { EventEmitter } from 'eventemitter3'
import { IConfigBack, IConfigNavigate, IConfigReset, INavigation, INavigationService } from './navigation.interface'
import { NavigationState, PartialState } from '@react-navigation/native'

class NavigationServiceClass extends EventEmitter implements INavigationService {
  private static instance: NavigationServiceClass | undefined
  private navigation: INavigation | undefined
  private currentScreen: string = ''

  public static getInstance(): NavigationServiceClass {
    if (!this.instance) {
      this.instance = new NavigationServiceClass()
    }
    return this.instance
  }

  public static clear(config?: { callback?: Function }) {
    this.instance?.destroy()
    config?.callback?.()
    delete this.instance
  }

  constructor() {
    super()
  }

  public setNavigation(navigation?: INavigation) {
    if (!navigation) {
      return
    }
    this.navigation = navigation
  }

  public setCurrentScreen(currentScreen: string) {
    this.currentScreen = currentScreen
  }

  public getCurrentScreen(): string {
    return this.currentScreen
  }

  private destroy() {}

  public navigate(config: IConfigNavigate) {
    this.navigation?.navigate({
      name: config.routerName,
      key: config.key,
      params: config.params,
      merge: config.merge,
    })
  }
  public reset(state: IConfigReset | NavigationState) {
    this.navigation?.reset(state)
  }
  public goBack(config?: IConfigBack) {
    this.navigation?.goBack()
  }
}

export const NavigationService = new NavigationServiceClass()
