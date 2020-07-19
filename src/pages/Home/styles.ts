import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0f3b0',
  },

  header: {
    flex: 2,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: width,
  },

  containerTitle: {
    width: width,
    height: 54,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  firstTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#d3686b'
  },

  secondTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#ffa500'
  },

  image: {
    width: 35,
    height: 35,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 16,
    textAlign: 'center'
  },

  containerQrCode: {
    flex: 2,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerButton: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: width * 0.7,
    height: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3686b'
  },

  textButton: {
    color: '#fff',
    fontSize: 16,
  }

});

export default styles;
