import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles'

export default function Home() {

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quinta, 22 de Fevereiro de 2023</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="nome do participante" placeholderTextColor="#6B6B6B" />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}