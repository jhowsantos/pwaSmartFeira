import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flex: 1,
    paddingHorizontal: 16,
    width: width,
    backgroundColor: '#fff',
  },

  containerTitle: {
    width: 210,
    height: 60,
    marginTop: 36,
    paddingLeft: 26,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  firstTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#E25B45'
  },

  secondTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FA6D3F',
    paddingRight: 10
  },

  image: {
    width: 26,
    height: 52,
    marginBottom: 15
  },

  subTitle: {
    width: 260,
    fontSize: 16,
    color: '#9F9898',
    paddingLeft: 26
  },


  aroundQrCode: {
    width: 170,
    height: 170,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  containerButton: {
    flex: 1,
    height: height * 0.6,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    backgroundColor: '#89D5C94B',
    position: 'absolute',
    bottom: 0,
  },
  
  button: {
    width: 284,
    height: 54,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E25B45'
  },

  textButton: {
    color: '#EFEDED',
    fontSize: 16,
  },

  registerButton: {
    width: 284,
    height: 54,
    borderRadius: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAC172'
  },

  textResgister: {
    color: '#E25B45',
    fontSize: 16,
  },

});

export default styles;
