import React, { useState} from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const ListProducts: React.FC = () => {
  const [products, setProducts] = useState('furry-time');

  return(
    <View style={styles.container}>
      <Text> Lista de itens </Text>
    </View>
  );
}

export default ListProducts;