import React from 'react';
import {ErrorToast, SuccessToast} from 'react-native-toast-message';
import {StyleSheet, View} from 'react-native';
import {fontScale} from 'react-native-utils-scale';
import {ThemeSetting, useThemedStyles} from '@src/theme';
import CustomText from '@components/common/Text';

interface ToastInfoProps {
  text1: string;
}
const ToastInfo: React.FC<ToastInfoProps> = props => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.successContainer}>
      <CustomText bold style={style.toastText} size={20}>
        {props.text1}
      </CustomText>
    </View>
  );
};

export const ToastConfig = {
  success: (props: any) => <SuccessToast {...props} />,
  info: (props: any) => <ToastInfo {...props} />,
  error: (props: any) => <ErrorToast {...props} />,
};

const styles = (theme: ThemeSetting) =>
  StyleSheet.create({
    successContainer: {
      backgroundColor: theme.colors.toastContainer,
      padding: fontScale(13),
      paddingHorizontal: fontScale(20),
      borderRadius: fontScale(30),
      shadowColor: theme.colors.black,
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
    },
    toastText: {
      color: theme.colors.toastText,
    },
  });
