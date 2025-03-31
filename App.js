import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const DATA = [
    {
      id: '1', titulo: 'Java', subtitulo: 'Básico de Java', imagem:
        'https://placehold.co/100x100', descricao: 'Curso introdutório de Java.'
    },
    {
      id: '2', titulo: 'HTML e CSS', subtitulo: 'HTML 5 e suas novidades',
      imagem: 'https://placehold.co/100x100', descricao: 'Curso sobre HTML5 e CSS.'
    },
    {
      id: '3', titulo: 'Android', subtitulo: 'Boas práticas', imagem:
        'https://placehold.co/100x100', descricao: 'Curso sobre desenvolvimento Android.'
    },
    {
      id: '4', titulo: 'C#', subtitulo: 'c# legal', imagem:
        'https://placehold.co/100x100', descricao: 'Curso de C#'
    },
    {
      id: '5', titulo: 'Arduino', subtitulo: 'Arduino bom', imagem:
        'https://placehold.co/100x100', descricao: 'Curso de Arduino'
    },
    {
      id: '6', titulo: 'React Native', subtitulo: 'Desbravando conteúdo',
      imagem: 'https://placehold.co/100x100', descricao: 'Curso de React Native.'
    },
  ];


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() =>
      handlePress(item)}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.subtitle}>{item.subtitulo}</Text>
      </View>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cursos do Prof Mário</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
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
