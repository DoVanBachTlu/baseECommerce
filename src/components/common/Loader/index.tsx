import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {Colors} from '@theme';

function Loader(props: ActivityIndicatorProps) {
  const {size, color} = props;
  return (
    <ActivityIndicator color={color || Colors.globalColors.blue} size={size} />
  );
}

export default Loader;
