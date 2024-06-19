import {isNumber} from '@utils/DeviceUtils';
import React, {useState} from 'react';
import {ViewProps, ImageProps, Image, StyleSheet, View} from 'react-native';
import FastImage, {FastImageProps, ResizeMode} from 'react-native-fast-image';
export const IMAGE_RESIZE_MODE = {
  CENTER: 'center',
  CONTAIN: 'contain',
  COVER: 'cover',
  STRETCH: 'stretch',
};
interface CustomImageProps
  extends Omit<FastImageProps, 'style' | 'resizeMode'> {
  style?: ViewProps['style'];
  loadingImg?: ImageProps['source'];
  errImg?: ImageProps['source'];
  placeholderImg?: ImageProps['source'];
  height?: number;
  width?: number;
  resizeMode?: (typeof IMAGE_RESIZE_MODE)[keyof typeof IMAGE_RESIZE_MODE];
}
function interceptCallback<T extends (...args: any[]) => any>(
  handler: T,
  callback?: T,
) {
  return (...args) => {
    handler(...args);
    return callback?.apply(null, args);
  };
}

let defaultProps: Partial<CustomImageProps> = {};

const CustomImage = (props: CustomImageProps) => {
  const {
    source,
    style,
    placeholderImg,
    loadingImg,
    errImg,
    height,
    width,
    resizeMode,
    ...passProps
  } = {
    ...defaultProps,
    ...props,
  };
  const stylesImage: any[] = [
    {
      overflow: 'hidden',
      ...(height && {height: height}),
      ...(width && {width: width}),
    },
  ];

  // Add styles Custom
  stylesImage.push(style);

  const isLocalImage = Number.isInteger(source);
  const [isLoading, setLoading] = useState(!isLocalImage);
  const [isError, setError] = useState(false);

  if (isNumber(source)) {
    return (
      <Image style={[stylesImage]} source={source} resizeMode={'contain'} />
    );
  }

  return (
    <View style={[stylesImage]}>
      {(isError || isLoading) && placeholderImg && (
        <Image
          style={StyleSheet.absoluteFill}
          source={placeholderImg}
          resizeMode={'cover'}
        />
      )}
      {isError && errImg && (
        <Image
          style={StyleSheet.absoluteFill}
          source={errImg}
          resizeMode={'cover'}
        />
      )}
      {isLoading && loadingImg && (
        <Image
          style={StyleSheet.absoluteFill}
          source={loadingImg}
          resizeMode={'cover'}
        />
      )}
      <FastImage
        {...passProps}
        resizeMode={resizeMode as ResizeMode}
        style={StyleSheet.absoluteFill}
        source={source}
        onLoadStart={interceptCallback(() => {
          setLoading(true);
          setError(false);
        }, props.onLoadStart)}
        onLoad={interceptCallback(() => {
          setLoading(false);
          setError(false);
        }, props.onLoad)}
        onError={interceptCallback(() => {
          setLoading(false);
          setError(true);
        }, props.onError)}
      />
    </View>
  );
};

CustomImage.ResizeMode = IMAGE_RESIZE_MODE;

CustomImage.setDefaultProps = (props: Partial<CustomImageProps>) => {
  defaultProps = {
    ...defaultProps,
    ...props,
  };
};

export default CustomImage;
