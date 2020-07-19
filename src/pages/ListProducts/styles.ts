import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 110,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#89D5C94B',
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A09490',
    paddingTop: 60,
    paddingLeft: 40
  },

  containerList: {
    flex: 3,
    backgroundColor: '#fff',
  },

  product: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 60,
    borderWidth: 0.05,
    borderColor: '#808080',
    shadowColor: '#808080',
    borderRadius: 35,
    marginTop: 10,
    elevation: 5
  },

  containerImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },

  image: {
    width: 60,
    height: 60,
  },

  containerInfos: {
    width: 140,
    height: 60,
    marginLeft: 10,
    paddingTop: 5,
  },

  name: {
    fontSize: 15,
    color: '#E25B45'
  },

  unidade: {
    paddingTop: 5,
    fontSize: 15,
    color: '#9B9998'
  },

  containerQuantity: {
    width: 90,
    height: 30,
    marginRight: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  qtdProduto: {
    fontSize: 20,
    paddingTop: 2,
    color: '#BAB2B2'
  },

  qtdButton: {
    fontSize: 30,
    color: '#89D5C9'
  },

  containerButton: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 172,
    height: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E25B45'
  },

  textButton: {
    color: '#EFEDED',
    fontSize: 16,
  }

});

export default styles;
