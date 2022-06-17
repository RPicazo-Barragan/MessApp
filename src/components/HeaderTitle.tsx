/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
}

export const HeaderTittle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, marginLeft: 10}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  globalMargin: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
});
