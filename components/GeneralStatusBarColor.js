import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import styles from './styles/GeneralStatusBarColorStyles';
const GeneralStatusBarColor = ({backgroundColor, ...props}) => (
  <SafeAreaView style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </SafeAreaView>
);
export default GeneralStatusBarColor;
