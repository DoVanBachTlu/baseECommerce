import React from 'react';
import {Text, TextProps, Animated, StyleSheet} from 'react-native';
import {Colors, KEY_FONT} from '../../../theme';

interface CustomTextProps extends TextProps {
  size?: number | undefined;
  isAnimated?: boolean | undefined;
  color?: string | undefined;
  font?: string | undefined;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  weight?: string | undefined;
  uppercase?: boolean | undefined;
  bold?: boolean | undefined;
  semibold?: boolean | undefined;
  medium?: boolean | undefined;
}

function CustomText(props: CustomTextProps): JSX.Element {
  const {
    size,
    style,
    children,
    isAnimated,
    color = Colors.dark.black,
    font = KEY_FONT.Poppins.regular,
    align,
    weight = 400,
    uppercase,
    bold,
    semibold,
    medium,
    ...otherProps
  } = props;
  const TextWrap = isAnimated ? Animated.Text : Text;
  let customStyle = {
    fontSize: size,
    color: color,
    fontFamily: font,
    textAlign: align,
    textTransform: uppercase ? `uppercase` : undefined,
  };
  if (bold) {
    customStyle.fontFamily = KEY_FONT.Poppins.bold;
  } else if (semibold) {
    customStyle.fontFamily = KEY_FONT.Poppins.semiBold;
  } else if (medium) {
    customStyle.fontFamily = KEY_FONT.Poppins.medium;
  }
  const textStyles = [styles.defaultText, customStyle, style];
  return (
    <TextWrap style={textStyles} {...otherProps} allowFontScaling={false}>
      {children}
    </TextWrap>
  );
}

CustomText.defaultProps = {
  size: 16,
};

const styles = StyleSheet.create({
  defaultText: {
    color: Colors.dark.black,
    fontFamily: KEY_FONT.Poppins.regular,
    includeFontPadding: false,
  },
});

export default CustomText;
