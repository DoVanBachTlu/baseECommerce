import React from 'react';
import {ScrollView, View, ViewProps, SafeAreaView} from 'react-native';
import {Colors} from '@theme/colors';

interface BaseScreenProps extends ViewProps {
  useScrollView?: boolean;
}

function BaseScreen(props: BaseScreenProps) {
  const {useScrollView, children, style = {}, ...otherProps} = props;
  const WrapView = useScrollView ? ScrollView : View;
  return (
    <WrapView
      style={[
        useScrollView ? {} : {backgroundColor: Colors.light.white, flex: 1},
        style,
      ]}
      {...otherProps}>
      {children}
    </WrapView>
  );
}
export default BaseScreen;
