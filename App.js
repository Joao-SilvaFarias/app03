import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [distancia, setDistancia] = useState('');
  const [tempo, setTempo] = useState('');
  const [velocidadesMedias, setVelocidadesMedias] = useState([]);

  const renderItem = ({ item }) => (
    <View>
      <Text>Distância: {item.distancia}</Text>
      <Text>Tempo: {item.tempo}</Text>
      <Text>Velocidade média: {item.velocidadeMedia}</Text>
    </View>
  );
  

  const add = () => {
    const d = parseFloat(distancia);
    const t = parseFloat(tempo);

    setVelocidadesMedias([...velocidadesMedias, {distancia: d, tempo: t, velocidadeMedia: d/t, id: Date.now().toString()}]);
    setDistancia('');
    setTempo('');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cursos do Prof Mário</Text>
      <TextInput keyboardType='numeric' value={distancia} onChangeText={(text) => setDistancia(text)} placeholder='Digite a distância'/>
      <TextInput keyboardType='numeric' value={tempo} onChangeText={(text) => setTempo(text)} placeholder='Digite o tempo'/>
      <TouchableOpacity onPress={add}>
        <Text>Calcular</Text>
        </TouchableOpacity>  
      <FlatList
        data={velocidadesMedias}
        keyExtractor={(velocidadeMedia) => velocidadeMedia.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#f5f5f5',
  },
  header: {
  backgroundColor: '#3F51B5',
  color: '#fff',
  fontSize: 20,
  textAlign: 'center',
  padding: 10,
  fontWeight: 'bold',
  },
  itemContainer: {
  flexDirection: 'row',
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  backgroundColor: '#fff',
  },
  image: {
  width: 50,
  height: 50,
  marginRight: 10,
  },
  textContainer: {
  justifyContent: 'center',
  },
  title: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  },
  subtitle: {
  fontSize: 14,
  color: '#666',
  },
  });
