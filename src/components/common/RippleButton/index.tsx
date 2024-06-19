import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import Ripple, {RippleProps} from 'react-native-material-ripple';
import {makeHitSlop} from '../../../helper';
import Loader from '../Loader';
import TouchLocker from '../../../modules/touch-locker';

let timeoutPress: any;
interface RippleButtonProps extends RippleProps {
  hitSlop?: number;
  loading?: boolean;
  loadingColor?: string;
  timeDebounce?: number;
  children?: any;
  style?: any;
  onPress?: () => void;
}

const RippleButton = (props: RippleButtonProps) => {
  const {
    children,
    style,
    hitSlop = 10,
    loading,
    onPress,
    loadingColor,
    timeDebounce = 100,
    ...otherProps
  } = props;
  const pressing = useRef<any>(null);
  return (
    <Ripple
      disabled={loading}
      hitSlop={makeHitSlop(hitSlop)}
      style={[styles.container, style]}
      onPress={e => {
        if (TouchLocker.getInstance()?.locked) return;
        TouchLocker.getInstance()?.setLock();
        pressing.current = true;
        if (timeoutPress) {
          clearTimeout(timeoutPress);
          timeoutPress = false;
        }
        timeoutPress = setTimeout(() => {
          pressing.current = false;
          onPress && onPress(e);
        }, timeDebounce);
      }}
      {...otherProps}>
      {loading ? <Loader color={loadingColor} /> : children}
    </Ripple>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RippleButton;
