import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Platform } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather as Icon } from '@expo/vector-icons';
import LottieView from "lottie-react-native";

import styles from './styles';
import api from '../../services';

interface ProductResponse {
  produtoId: string;
  nome: string;
  unidade: string;
  urlImagem: string;
  feiranteProdutos: string | null;
}

const ListProducts: React.FC = () => {
  const [qtdTomate, setQtdTomate] = useState<number>(0);
  const [qtdLaranja, setQtdLaranja] = useState<number>(0);
  const [qtdBanana, setQtdBanana] = useState<number>(0);
  const [qtdBatata, setQtdBatata] = useState<number>(0);
  const [products, setProducts] = useState<ProductResponse[]>([])

  const [animate, setAnimate] = useState<boolean>(true);

  const navigation = useNavigation();

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get('/Produto');

      setProducts(response.data);
      setAnimate(false);
    };

    loadProducts();
  },[])

  function addQuantity() {
    setQtdLaranja(qtdLaranja+1);
  }

  function subQuantity() {
    setQtdLaranja(qtdLaranja-1);
  }


  if(animate){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {Platform.OS !== 'web' ?(
          <LottieView
            autoPlay
            loop={true}
            source={require('../../assets/animate/map.json')}
          />
        ):(
          <>
            <Image source={require('../../assets/map.jpg')} style={{ width: 100, height: 100}} />
            <Text style={{ fontSize: 16, paddingTop: 20}}>Aguarde ...</Text>
          </>
        )}
      </View>
    );
  }else{
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Produtos para você</Text>
        </View>
        <View style={styles.containerList}>
          <FlatList
            contentContainerStyle={{ padding: 24, alignItems: 'center', justifyContent: 'center' }}
            data={products}
            keyExtractor={product => product.produtoId.toString()}
            renderItem={({ item: product}) => (
              <View style={styles.product}>
                <View style={styles.containerImage}>
                  <Image style={styles.image} source={{ uri: product.urlImagem }} /> 
                </View>
  
                <View style={styles.containerInfos}>
                  <Text style={styles.name}>{product.nome}</Text>
                  <Text style={styles.unidade}>{product.unidade}</Text>
                </View>
  
                <View style={styles.containerQuantity}>
                  <TouchableOpacity onPress={addQuantity}>
                    <Icon name='plus-circle' style={styles.qtdButton} />
                  </TouchableOpacity>
                  
                  <Text style={styles.qtdProduto}>{qtdLaranja}</Text>
                  
                  <TouchableOpacity onPress={subQuantity}>
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
            <Text style={styles.textButton}>Comprar</Text>
          </RectButton>
        </View>
      </View>
    );
  }
}

export default ListProducts;