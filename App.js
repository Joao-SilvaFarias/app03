import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SectionList, TextInput } from 'react-native-web';

export default function App() {

  const [contatos, setContatos] = useState(
    [
      {nome: "Thiago Silva", telefone: 11983927392, id: 1, mensagens: [{id: 1, mensagem: "Oi"}, {id: 2, mensagem: "Beleza"}]},
      {nome: "Thiago Silva", telefone: 11983927392, id: 2, mensagens: [{id: 1, mensagem: "Olá"}, {id: 2, mensagem: "Tbm"}]},
      {nome: "Thiago Silva", telefone: 11983927392, id: 3, mensagens: [{id: 1, mensagem: "Bom dia"}, {id: 2, mensagem: "Tranquilo"}]},
      {nome: "Thiago Silva", telefone: 11983927392, id: 4, mensagens: [{id: 1, mensagem: "Boa noite"}, {id: 2, mensagem: "Tudo bem?"}]},
      {nome: "Thiago Silva", telefone: 11983927392, id: 5, mensagens: [{id: 1, mensagem: "Beleza"}, {id: 2, mensagem: "Tudo azul?"}]},
      {nome: "Thiago Silva", telefone: 11983927392, id: 6, mensagens: [{id: 1, mensagem: "Boa tarde"}, {id: 2, mensagem: "Beleza"}]}
    ]
  );

  const [mensagens, setMensagens] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [currentContact, setCurrentContact] = useState("");


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contato} onPress={() => abrir(item.id)}>
      <Text style={styles.primeiraLetra}>{item.nome.charAt(0)}</Text>
      <Text style={styles.nome}>{item.nome}</Text>
    </TouchableOpacity>
  );

  const mensagemItem = ({ item }) => (
    <View style={styles.mensagem}>
      <Text style={styles.textMensagem}>{item.mensagem}</Text>
    </View>
  );

  const abrir = (id) => {
    const contato = contatos.find(c => c.id === id);
    setCurrentContact(contato);
    setMensagens(contato.mensagens);
  }

  const enviarMensagem = () => {
    const novaMensagem = {id: Date.now().toString(), mensagem: mensagem};
    const index = contatos.findIndex(c => c.id === currentContact.id);
    const novaLista = [...contatos[index].mensagens, novaMensagem];
    const novoContato = {...currentContact, mensagens: novaLista};
    const novaListaC = [...contatos];
    novaListaC[index].mensagens = novaLista;
    setContatos(novaListaC)
    setCurrentContact(novoContato);
    setMensagens(novaLista);
    setMensagem("");
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
      data={contatos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      />
      <View style={styles.constainer2}>
        <FlatList style={styles.listMensagens}
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={mensagemItem}
        />
        <View style={styles.containerInput}>
          <TextInput placeholder='Digite algo' style={styles.input} value={mensagem} onChangeText={(text) => setMensagem(text)}/>
          <TouchableOpacity style={styles.button} onPress={enviarMensagem}>Enviar</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "#292929",
    flexDirection: "row"
  }, 
  list: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    scrollbarWidth: "none", 
  msOverflowStyle: "none", 
  }, 
  contato: {
    width: "100%", 
    padding: 10,
    display: 'flex', 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    backgroundColor: "#4f4f4f",
    borderBottomWidth: 2,
    borderBottomColor: "#292929"
  }, 
  primeiraLetra: {
    height: 50, 
    width: 50,
    backgroundColor: "#0f0",
    borderRadius: 30,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", 
    fontSize: "1.5rem"
  }, 
  nome: {
    fontSize: '1.2rem', 
    color: "#fff"
  }, 
  constainer2: {
    width: "70%",
    display: "flex", 
    flexDirection: "column", 
    alignItems: "flex-start", 
    justifyContent: "space-between"
  }, 
  containerInput: {
    width: "100%",
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    padding: 10,
  }, 
  mensagem: {
    backgroundColor: "#4f4f4f", 
    padding: 20, 
    borderRadius: 10, 
    marginBottom: 10
  },
  textMensagem: {
    color: "#fff"
  }, 
  listMensagens: {
    display: "flex",
    padding: 20
  }, 
  input: {
    padding: 10,
    backgroundColor: "#4f4f4f",
    color: "#fff", 
    border: "none", 
    outlineStyle: "none", 
    borderRadius: 10, 
    width: "90%"
  }, 
  button: {
    width: 70, 
    padding: 10,
    color: "#fff", 
    backgroundColor: "#0f0",
    fontSize: "1rem", 
    borderRadius: 10
  }
});
