import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const NetInfoContext = React.createContext({});

export const NetInfoProvider = ({children}) => {
  const [netInfo, setNetInfo] = useState<any>(null);
  useEffect(() => {
    const initNetInfo = async () => {
      try {
        const netInfo1 = await NetInfo.fetch();
        setNetInfo(netInfo1);
      } catch (error) {}
    };
    initNetInfo();
    const unsubscribeNetInfo = NetInfo.addEventListener(state => {
      setNetInfo(state);
    });
    return () => {
      unsubscribeNetInfo();
    };
  }, []);
  return (
    <NetInfoContext.Provider value={netInfo}>
      {children}
    </NetInfoContext.Provider>
  );
};

export default NetInfoProvider;
