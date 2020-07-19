import React, { useState} from 'react';
import { View, Text, Image } from 'react-native';
import { Linking} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';

import styles from './styles';

function handleWhatsApp() {
  Linking.openURL(`whatsapp://send?phone=551148377404&text=furry-time`);
}

const Select: React.FC = () => {
  const [qrCode, setQrCode] = useState('furry-time');

  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.containerTitle}>
          <Text style={styles.firstTitle}>Smart</Text>
          <Text style={styles.secondTitle}>Feira</Text>
          <Image source={require('../../assets/abacaxi.png')} style={styles.image} />
        </View>
        <Text style={styles.subTitle}>Encontre pequenos produtores e feirantes locais</Text>
      </View>

      <View style={styles.containerButton}>
        <View style={styles.aroundQrCode}>
          <QRCode 
            value={qrCode}
            size={150}
            backgroundColor='#fff'
          />
        </View>

        <RectButton
          onPress={handleWhatsApp}
          style={styles.button}
        >
          <Text style={styles.textButton}>Encontrar feirante</Text>
        </RectButton>

        <RectButton
          onPress={() => {}}
          style={styles.registerButton}
        >
          <Text style={styles.textResgister}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Select;