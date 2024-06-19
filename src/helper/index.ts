import moment from 'moment';
import Config from '../Config';

export const myLog = (...args: any) => {
  if (!Config.debug) return;
  console.log(moment().format('HH:mm:ss') + ' : ', ...args);
};
export const makeHitSlop = (size: number) => {
  return {
    top: size,
    left: size,
    bottom: size,
    right: size,
  };
};
