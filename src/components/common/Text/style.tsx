import {StyleSheet} from 'react-native';
import {fontScale} from 'react-native-utils-scale';
import {KEY_FONT, ThemeSetting} from '../../../theme';

export const TextStyles = (theme: ThemeSetting) =>
  StyleSheet.create({
    // Typography
    H1: {
      color: theme.colors.text,
      fontSize: fontScale(34),
      fontFamily: KEY_FONT.Poppins.bold,
    },
    H2: {
      color: theme.colors.text,
      fontSize: fontScale(28),
      fontFamily: KEY_FONT.Poppins.bold,
    },
    H3: {
      color: theme.colors.text,
      fontSize: fontScale(22),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    P1: {
      color: theme.colors.text,
      fontSize: fontScale(34),
      fontFamily: KEY_FONT.Poppins.bold,
    },
    P2: {
      color: theme.colors.text,
      fontSize: fontScale(28),
      fontFamily: KEY_FONT.Poppins.bold,
    },
    P3: {
      color: theme.colors.text,
      fontSize: fontScale(22),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    P4_M: {
      color: theme.colors.text,
      fontSize: fontScale(17),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    P4_R: {
      color: theme.colors.text,
      fontSize: fontScale(17),
      fontFamily: KEY_FONT.Poppins.regular,
    },
    P5_M: {
      color: theme.colors.text,
      fontSize: fontScale(15),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    P5_R: {
      color: theme.colors.text,
      fontSize: fontScale(15),
      fontFamily: KEY_FONT.Poppins.regular,
    },
    P6_M: {
      color: theme.colors.text,
      fontSize: fontScale(13),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    P6_R: {
      color: theme.colors.text,
      fontSize: fontScale(13),
      fontFamily: KEY_FONT.Poppins.regular,
    },
    P7_M: {
      color: theme.colors.text,
      fontSize: fontScale(11),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    P7_R: {
      color: theme.colors.text,
      fontSize: fontScale(11),
      fontFamily: KEY_FONT.Poppins.regular,
    },
    B1_M: {
      color: theme.colors.text,
      fontSize: fontScale(17),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    B1_R: {
      color: theme.colors.text,
      fontSize: fontScale(17),
      fontFamily: KEY_FONT.Poppins.regular,
    },
    B2_M: {
      color: theme.colors.text,
      fontSize: fontScale(15),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    B2_R: {
      color: theme.colors.text,
      fontSize: fontScale(15),
      fontFamily: KEY_FONT.Poppins.regular,
    },
    B3_M: {
      color: theme.colors.text,
      fontSize: fontScale(13),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    B3_R: {
      color: theme.colors.text,
      fontSize: fontScale(13),
      fontFamily: KEY_FONT.Poppins.regular,
    },
    B4_M: {
      color: theme.colors.text,
      fontSize: fontScale(11),
      fontFamily: KEY_FONT.Poppins.medium,
    },
    B4_R: {
      color: theme.colors.text,
      fontSize: fontScale(11),
      fontFamily: KEY_FONT.Poppins.regular,
    },
    // FontFamily
    Bold: {
      fontFamily: KEY_FONT.Poppins.bold,
    },
    Regular: {
      fontFamily: KEY_FONT.Poppins.regular,
    },
    Medium: {
      fontFamily: KEY_FONT.Poppins.medium,
    },
    Light: {
      fontFamily: KEY_FONT.Poppins.light,
    },
  });
