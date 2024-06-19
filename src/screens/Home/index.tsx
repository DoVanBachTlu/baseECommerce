import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BaseScreen from '../Base';
import CustomText from '@src/components/common/Text';

export default function Home() {
  return (
    <BaseScreen>
      <CustomText>Home</CustomText>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({});
