/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import images from '../assets/img';
import {useForm} from '../hooks/useForm';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

export const LoginScreen = () => {
  const {navigate} = useNavigation();
  const {onChange} = useForm({
    email: '',
    password: '',
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={images.headerLogo}
            style={{width: '70%', height: '100%'}}
          />
        </View>
        <View style={styles.cardLogin}>
          <Text style={styles.label}> Email :</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Ingrese email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />
          <Text style={styles.label}>Contraseña: </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Ingrese Contraseña"
            onChangeText={value => onChange(value, 'password')}
            keyboardType={'visible-password'}
          />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('WelcomeScreen')}>
              <Text style={styles.buttonText}> Iniciar Sesion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => navigate('WelcomeScreen')}>
              <Icon name="finger-print-outline" size={40} color="#E7FF49" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  globalMargin: {margin: 10},
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  cardLogin: {margin: 50},
  label: {
    color: '#091940',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 15,
    fontSize: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 40,
    justifyContent: 'space-around',
  },
  button: {
    height: 60,
    width: '80%',
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#091940',
  },
  buttonText: {
    color: '#E7FF49',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button2: {
    height: 60,
    width: 60,
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#091940',
  },
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});
