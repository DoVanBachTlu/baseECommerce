import moize from 'moize';
import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;
export const deviceHeight = Math.max(screenWidth, screenHeight);
export const deviceWidth = Math.min(screenWidth, screenHeight);
export const deviceWindowHeight = Dimensions.get('window').height;
export const deviceWindowWidth = Dimensions.get('window').width;
export const dvWidthPx = PixelRatio.getPixelSizeForLayoutSize(deviceWidth);
export const dvHeightPx = PixelRatio.getPixelSizeForLayoutSize(deviceHeight);
export const navigationBarAndroidHeight = deviceHeight - deviceWindowHeight;

interface AppInfo {
  osVersion: any;
  versionJS: string;
  mac: string;
  deviceType: any;
  deviceName: any;
  brand: string;
  deviceId: string;
  versionCode: number;
  bundleId: string;
  model: string;
  buildNumber: number;
  buildVersion: string;
  systemVersion: string;
  osType: any;
  lang: any;
  platform: any;
  deviceToken?: string;
  changeDeviceToken: (fcmToken: string) => void;
}
export const appInfo: AppInfo = {
  osVersion: Platform.select({
    android: `android-${DeviceInfo.getSystemVersion()}`,
    ios: `ios-${DeviceInfo.getSystemVersion()}`,
  }),
  versionJS: DeviceInfo.getVersion(),
  mac: DeviceInfo.getMacAddressSync(),
  deviceType: Platform.select({
    android: '22',
    ios: '21',
  }),
  deviceName:
    Platform.select({
      ios: 'Mobile iOS - ',
      android: 'Mobile android - ',
    }) +
    DeviceInfo.getBrand() +
    '(' +
    DeviceInfo.getSystemVersion() +
    ') - ' +
    DeviceInfo.getModel(),
  brand: DeviceInfo.getBrand(),
  deviceId: DeviceInfo.getUniqueIdSync(),
  versionCode: 20240324,
  bundleId: DeviceInfo.getBundleId(),
  model: DeviceInfo.getModel(),
  buildNumber: 1, //DeviceInfo.getBuildNumber(),
  buildVersion: DeviceInfo.getVersion(),
  systemVersion: DeviceInfo.getSystemVersion(),
  osType: Platform.select({
    android: 'Android', //'Android',
    ios: 'IOS',
  }),
  lang: {
    vi: 'vi',
    en: 'en',
  },
  platform: Platform.select({
    android: 2,
    ios: 1,
  }),
  changeDeviceToken: function (fcmToken: string) {
    this.deviceToken = fcmToken;
  },
};

export const isNumber = (val: unknown): val is number =>
  typeof val === 'number' && !Number.isNaN(val);

const formatMoneyBase = ({money}) => {
  return !isNumber(money)
    ? 0 + ' đ'
    : (money / 100000).toFixed(0).replace(/./g, function (c, i, a) {
        return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
      }) + ' đ';
};

export const formatMoney = moize(formatMoneyBase);

export const nFormatter = (num: number, digits: number = 1): string => {
  const lookup = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: 'K'},
    {value: 1e6, symbol: 'M'},
    {value: 1e9, symbol: 'G'},
    {value: 1e12, symbol: 'T'},
    {value: 1e15, symbol: 'P'},
    {value: 1e18, symbol: 'E'},
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
};
export const platform = Platform.OS;

export const isIphoneX =
  platform === 'ios' &&
  !Platform.isTV &&
  (deviceHeight === 780 ||
    deviceWidth === 780 ||
    deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 844 ||
    deviceWidth === 844 ||
    deviceHeight === 896 ||
    deviceWidth === 896 ||
    deviceHeight === 926 ||
    deviceWidth === 926);

export const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX) {
    return iphoneXStyle;
  }
  return regularStyle;
};

export const getStatusBarHeight = safe => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
  });
};

export const IS_TABLET = DeviceInfo.isTablet();

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? (isIphoneX ? 44 : 20) : StatusBar.currentHeight;

export const iosDevicesInch = {
  // 1st Gen
  // 3G
  // 3GS
  // 4
  iPhone4: 3.5,
  // 4S
  iPhone4s: 3.5,
  // 5
  iPhone5: 4,
  // 5c
  iPhone5c: 4,
  // 5s
  iPhone5s: 4,
  // 6 Plus
  iPhone6Plus: 5.5,
  // 6
  iPhone6: 4.7,
  // 6s
  iPhone6s: 4.7,
  // 6s Plus
  iPhone6sPlus: 5.5,
  // SE
  iPhoneSE: 4,
  // 7
  iPhone7: 4.7,
  // 7 Plus
  iPhone7Plus: 5.5,
  // 8
  iPhone8: 4.7,
  // 8 Plus
  iPhone8Plus: 5.5,
  // X
  iPhoneX: 5.8,
  // XR
  iPhoneXR: 6.1,
  // XS
  iPhoneXS: 5.8,
  // XS Max
  iPhoneXSMax: 6.5,
  // 11
  iPhone11: 6.1,
  // 11 Pro
  iPhone11Pro: 5.8,
  // 11 Pro Max
  iPhone11ProMax: 6.5,
  // 1
  iPad: 9.7,
  // 2
  iPad2: 9.7,
  // Mini
  iPadMini: 7.9,
  // 3
  iPad3: 9.7,
  // 4
  iPad4: 9.7,
  // Air
  iPadAir: 9.7,
  // Mini 2
  iPadMini2: 7.9,
  // Mini 3
  iPadMini3: 7.9,
  // Mini 4
  iPadMini4: 7.9,
  // Air 2
  iPadAir2: 9.7,
  // Pro 12.9-inch
  'iPadPro12.9-inch': 12.9,
  // Pro 9.7-inch
  'iPadPro9.7-inch': 9.7,
  // iPad 5th Gen, 2017
  // Pro 12.9-inch, 2017
  // 'iPadPro12.9-inch': 12.9,
  // Pro 10.5-inch, 2017
  'iPadPro10.5-inch': 10.5,
  // iPad 6th Gen, 2018
  'iPad(6thgeneration)': 9.7,
  // iPad 7th Gen, 2019
  'iPad(7thgeneration)': 10.2,
  // iPad Pro 3rd Gen 11-inch, 2018
  // iPad Pro 3rd Gen 11-inch 1TB, 2018
  'iPadPro11-inch(3rdgeneration)': 11,
  // iPad Pro 3rd Gen 12.9-inch, 2018
  // iPad Pro 3rd Gen 12.9-inch 1TB, 2018
  'iPadPro12.9-inch(3rdgeneration)': 12.9,
  // Mini 5
  iPadMini5: 7.9,
  // Air 3
  iPadAir3: 9.7,
};
let inch = iosDevicesInch[appInfo.model.replace(/\s/g, '')];

// const xdpi = DeviceInfo.getXdpi();
// function getPPCm() {
//   myLog('getPPCm=>>', xdpi);

//   let ppi;
//   if (IS_ANDROID) {
//     return xdpi / 2.54;
//   }
//   if (!inch) {
//     if (IS_TABLET) inch = 9.7;
//     else inch = 6.5;
//   }
//   const diagonalLine = Math.sqrt(Math.pow(dvHeightPx, 2) + Math.pow(dvWidthPx, 2));
//   ppi = 160 * PixelRatio.get();
//   return ppi / 2.54;
// }
