import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles'
import { Participant } from '../../components/Participant';

export default function Home() {
  const participants = ['Richard','Diego','Ghandi','Biro', 'Neymar','Johan','Hermes','Zeus','Thor','Fenhir','Atlas']

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!")
  }


  function handleParticipantRemove(name:string){
    console.log(`Botao clicado ${name}`)
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
      
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant =>(
          <Participant key={participant} name={participant} onRemove={()=>handleParticipantRemove("Richard")}/>
        ))
      }
      </ScrollView>

      

     
    </View>
  );
}