import React, { useState} from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';


import styles from './styles';

const ListProducts: React.FC = () => {
  const [qtdTomate, setQtdTomate] = useState<number>(0);
  const [qtdLaranja, setQtdLaranja] = useState<number>(0);
  const [qtdBanana, setQtdBanana] = useState<number>(0);
  const [qtdBatata, setQtdBatata] = useState<number>(0);

  const products = [
    {
      id: 1,
      name: 'Tomate',
      image: '../../assets/tomate.png',
      unidade: '1 kg',
    },
    {
      id: 2,
      name: 'Laranja',
      image: '../../assets/laranja.png',
      unidade: '1 unidade',
    },
    {
      id: 3,
      name: 'Banana',
      image: '../../assets/banana.png',
      unidade: '1 unidade',
    },
    {
      id: 4,
      name: 'Batata',
      image: '../../assets/batata.png',
      unidade: '1 kg',
    }
  ]

  function addQuantity() {
    setQtdLaranja(1);
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Produtos para você</Text>
      </View>
      <View style={styles.containerList}>
        <FlatList
          contentContainerStyle={{ padding: 24 }}
          data={products}
          keyExtractor={product => product.id}
          renderItem={({ item: product}) => (
            <View style={styles.product}>
              <View style={styles.containerImage}>
                <Image style={styles.image} source={require('../../assets/tomate.png')} /> 
              </View>

              <View style={styles.containerInfos}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.unidade}>{product.unidade}</Text>
              </View>

              <View style={styles.containerQuantity}>
                <TouchableOpacity onPress={addQuantity}>
                  <Icon name='plus-circle' style={styles.qtdButton} />
                </TouchableOpacity>
                
                <Text style={styles.qtdProduto}>{qtdLaranja}</Text>
                
                <TouchableOpacity onPress={() => {}}>
                  <Icon name='minus-circle' style={styles.qtdButton} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.containerButton}>
        <RectButton
            onPress={() => {}}
            style={styles.button}
          >
          <Text style={styles.textButton}>Começar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default ListProducts;