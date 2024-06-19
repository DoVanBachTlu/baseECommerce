import CustomText from '@components/common/Text';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <CustomText>bbbb</CustomText>
    </SafeAreaProvider>
  );
}

export default App;
