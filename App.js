import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SectionList, TextInput } from 'react-native-web';

export default function App() {
  const [forcas, setForcas] = useState([]);
  const [massa, setMassa] = useState('');
  const [aceleracao, setAceleracao] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.textButton}>Massa: {item.massa}</Text>
      <Text style={styles.textButton}>Aceleração: {item.aceleracao}</Text>
      <Text style={styles.textButton}>Força: {item.forca}</Text>
    </View>
  );

  const sectionHeader = ({ section: { title } }) => (
    <Text style={{backgroundColor: '#3F51B5',
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold', marginTop: 20}}>{title}</Text>
  );


  const add = () => {
    if (massa != "" && !isNaN(massa) && aceleracao != "" && !isNaN(aceleracao)) {
      const m = parseFloat(massa);
      const a = parseFloat(aceleracao);
      const f = m * a;
      let categoria = "";
      if (f <= 10) {
        categoria = "Leve";
      } else if (f > 10 && f <= 50) {
        categoria = "Médio";
      } else {
        categoria = "Pesado";
      }

      const index = forcas.findIndex(forca => forca.title === categoria);

      if (index !== -1) {
        const novaLista = [...forcas];
        const novaSessao = {...novaLista[index]};
        novaSessao.data = [...novaSessao.data, { aceleracao: a, massa: m, forca: f, id: Date.now().toString() }];
        novaLista[index] = novaSessao;
        setForcas(novaLista);
      } else {
        setForcas([...forcas, {
          title: categoria,
          data: [{ aceleracao: a, massa: m, forca: f, id: Date.now().toString() }]
        }]);
      }
      
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cálculo da força</Text>
      <View style={{ display: "flex", gap: 10, alignItems: "flex-end", paddingInline: 20 }}>
        <TextInput style={styles.input} keyboardType='numeric' value={massa} onChangeText={(text) => setMassa(text)} placeholder='Digite a massa' />
        <TextInput style={styles.input} keyboardType='numeric' value={aceleracao} onChangeText={(text) => setAceleracao(text)} placeholder='Digite a aceleração' />
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <TouchableOpacity style={styles.button} onPress={() => setForcas([])}>
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={add}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SectionList
        style={{ paddingInline: 20 , display: "flex", gap: 20}}
        sections={forcas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={sectionHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    gap: 20
  },
  input: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    width: "100%"
  },
  header: {
    backgroundColor: '#3F51B5',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: "#3F51B5",
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  textButton: {
    color: "#fff"
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#5A33E0",
    borderRadius: 20,
    marginTop: 20
  }
});
