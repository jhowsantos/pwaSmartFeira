import React, { useState} from 'react';
import { View, Text, Image } from 'react-native';
import { Linking} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';

import styles from './styles';

function handleWhatsApp() {
  Linking.openURL(`whatsapp://send?phone=551148377404&text=furry-time`);
}

const Home: React.FC = () => {
  const [qrCode, setQrCode] = useState('furry-time');

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

      <View style={styles.containerQrCode}>
        <QRCode 
          value={qrCode}
          size={180}
          backgroundColor='#DCF3EF'
          color='#796F6F'
        />
      </View>

      <View style={styles.containerButton}>
        <RectButton
          onPress={handleWhatsApp}
          style={styles.button}
        >
          <Text style={styles.textButton}>Começar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Home;