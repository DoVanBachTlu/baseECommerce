import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenName} from '../router/ScreenName';
import {IS_ANDROID, IS_TABLET} from '@src/utils/DeviceUtils';
import {Routers} from '../router';

const Stack = createNativeStackNavigator();
function RootStack() {
  const disabledGestures: string[] = [];
  return (
    <Stack.Navigator
      initialRouteName={screenName.splash}
      screenOptions={{
        headerShown: false,
        animation: IS_TABLET && IS_ANDROID ? 'none' : 'default',
      }}>
      <Stack.Group>
        {Object.values(Routers).map(route => {
          return (
            <Stack.Screen
              options={{
                gestureEnabled: !disabledGestures.includes(route.name),
              }}
              name={route.name}
              component={route.component}
            />
          );
        })}
      </Stack.Group>
    </Stack.Navigator>
  );
}
export default RootStack;
