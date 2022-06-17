/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {HeaderTittle} from '../components/HeaderTitle';
import { HorizontalList } from '../components/HorizontalList';

const {width} = Dimensions.get('screen');

export const WelcomeScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <HeaderTittle title="CMS Assambly Line" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: width,
    height: 100,
  },
  header: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 6,
    marginHorizontal:20,
    alignItems:'center',
    borderRadius:7,
  },
});
