import React, { useState, useEffect } from 'react';
import { View, Text, Linking, Image, Platform } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

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

  const [banana, setBanana] = useState<ProductResponse>({} as ProductResponse)
  const [batata, setBatata] = useState<ProductResponse>({} as ProductResponse)
  const [laranja, setLaranja] = useState<ProductResponse>({} as ProductResponse)
  const [tomate, setTomate] = useState<ProductResponse>({} as ProductResponse)

  const [animate, setAnimate] = useState<boolean>(true);
  const [textButton, setTextButton] = useState<string>('Comprar');

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get('/Produto');

      setBanana(response.data[0]);
      setBatata(response.data[1]);
      setLaranja(response.data[2]);
      setTomate(response.data[3]);
      setAnimate(false);
    };

    loadProducts();
  },[])

  function addQuantity(tipo: string): void {

    switch(tipo) {
      case 'Banana':
        return setQtdBanana(qtdBanana+1);
      case 'Batata':
        return setQtdBatata(qtdBatata+1);
      case 'Laranja':
        return setQtdLaranja(qtdLaranja+1);
      case 'Tomate':
        return setQtdTomate(qtdTomate+1);
    }
  }

  function subQuantity(tipo: string): void {

    switch(tipo) {
      case 'Banana':
        return setQtdBanana(qtdBanana-1);
      case 'Batata':
        return setQtdBatata(qtdBatata-1);
      case 'Laranja':
        return setQtdLaranja(qtdLaranja-1);
      case 'Tomate':
        return setQtdTomate(qtdTomate-1);
    }
  }

  async function sendRequest(): Promise<void> {

    const request = {
      "pedidoId": 0,
      "feiranteId": 1,
      "clienteId": 4,
      "itensPedidoDTO": [
        {
          "itemPedidoId": 0,
          "feiranteProdutoId": 3,
          "quantidade": 2,
          "valor": 1.50,
          "pedidoId": 0
        },
        {
          "itemPedidoId": 0,
          "feiranteProdutoId": 2,
          "quantidade": 2,
          "valor": 2.00,
          "pedidoId": 0
        }
      ]
    }

    await api.post('/Feirante/enviar-pedido-zap', request);

    setTextButton('Pedido enviado com sucesso');

    Linking.openURL(`whatsapp://send?phone=551148377404`);

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
          <View style={styles.product}>
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{ uri: banana.urlImagem }} /> 
            </View>

            <View style={styles.containerInfos}>
              <Text style={styles.name}>{banana.nome}</Text>
              <Text style={styles.unidade}>{banana.unidade}</Text>
            </View>

            <View style={styles.containerQuantity}>
              <TouchableOpacity onPress={() => addQuantity(banana.nome)}>
                <Icon name='plus-circle' style={styles.qtdButton} />
              </TouchableOpacity>
              
              <Text style={styles.qtdProduto}>{qtdBanana}</Text>
              
              <TouchableOpacity onPress={() => subQuantity(banana.nome)}>
                <Icon name='minus-circle' style={styles.qtdButton} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.product}>
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{ uri: batata.urlImagem }} /> 
            </View>

            <View style={styles.containerInfos}>
              <Text style={styles.name}>{batata.nome}</Text>
              <Text style={styles.unidade}>{batata.unidade}</Text>
            </View>

            <View style={styles.containerQuantity}>
              <TouchableOpacity onPress={() => addQuantity(batata.nome)}>
                <Icon name='plus-circle' style={styles.qtdButton} />
              </TouchableOpacity>
              
              <Text style={styles.qtdProduto}>{qtdBatata}</Text>
              
              <TouchableOpacity onPress={() => subQuantity(batata.nome)}>
                <Icon name='minus-circle' style={styles.qtdButton} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.product}>
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{ uri: laranja.urlImagem }} /> 
            </View>

            <View style={styles.containerInfos}>
              <Text style={styles.name}>{laranja.nome}</Text>
              <Text style={styles.unidade}>{laranja.unidade}</Text>
            </View>

            <View style={styles.containerQuantity}>
              <TouchableOpacity onPress={() => addQuantity(laranja.nome)}>
                <Icon name='plus-circle' style={styles.qtdButton} />
              </TouchableOpacity>
              
              <Text style={styles.qtdProduto}>{qtdLaranja}</Text>
              
              <TouchableOpacity onPress={() => subQuantity(laranja.nome)}>
                <Icon name='minus-circle' style={styles.qtdButton} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.product}>
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{ uri: tomate.urlImagem }} /> 
            </View>

            <View style={styles.containerInfos}>
              <Text style={styles.name}>{tomate.nome}</Text>
              <Text style={styles.unidade}>{tomate.unidade}</Text>
            </View>

            <View style={styles.containerQuantity}>
              <TouchableOpacity onPress={() => addQuantity(tomate.nome)}>
                <Icon name='plus-circle' style={styles.qtdButton} />
              </TouchableOpacity>
              
              <Text style={styles.qtdProduto}>{qtdTomate}</Text>
              
              <TouchableOpacity onPress={() => subQuantity(tomate.nome)}>
                <Icon name='minus-circle' style={styles.qtdButton} />
              </TouchableOpacity>
            </View>
          </View>

        </View>
  
        <View style={styles.containerButton}>
          <RectButton
              onPress={sendRequest}
              style={styles.button}
            >
            <Text style={styles.textButton}>{textButton}</Text>
          </RectButton>
        </View>
      </View>
    );
  }
}

export default ListProducts;