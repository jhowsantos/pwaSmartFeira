import React, { useState} from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home: React.FC = () => {
  const [qrCode, setQrCode] = useState('furry-time');

  const navigation = useNavigation();

  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.containerTitle}>
          <Text style={styles.firstTitle}>Smart</Text>
          <Text style={styles.secondTitle}>Feira</Text>
          <Image source={require('../../assets/abacaxi.png')} style={styles.image} />
        </View>
        <Text style={styles.subTitle}>Alimento saudável sem sair de casa</Text>
      </View>

      <View style={styles.containerButton}>
        <RectButton
          onPress={() => navigation.navigate('Select')}
          style={styles.button}
        >
          <Text style={styles.textButton}>Começar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Home;