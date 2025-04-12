import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SectionList, TextInput } from 'react-native-web';

export default function App() {

  const [contatos, setContatos] = useState(
    [
      { nome: "Felipe Luis", telefone: 11983927777, id: 1, mensagens: [{ id: 1, mensagem: "Oi" }, { id: 2, mensagem: "Beleza" }] },
      { nome: "Vinicius", telefone: 11983927426, id: 2, mensagens: [{ id: 1, mensagem: "Olá" }, { id: 2, mensagem: "Tbm" }] },
      { nome: "Maria de Lurdes", telefone: 11983927256, id: 3, mensagens: [{ id: 1, mensagem: "Bom dia" }, { id: 2, mensagem: "Tranquilo" }] },
      { nome: "Neymar", telefone: 11983927742, id: 4, mensagens: [{ id: 1, mensagem: "Boa noite" }, { id: 2, mensagem: "Tudo bem?" }] },
      { nome: "Sandro Rezende", telefone: 11947227392, id: 5, mensagens: [{ id: 1, mensagem: "Beleza" }, { id: 2, mensagem: "Tudo azul?" }] },
      { nome: "Augusto Pereira", telefone: 11983927392, id: 6, mensagens: [{ id: 1, mensagem: "Boa tarde" }, { id: 2, mensagem: "Beleza" }] }, 
      { nome: "Felipe Luis", telefone: 11983927777, id: 7, mensagens: [{ id: 1, mensagem: "Oi" }, { id: 2, mensagem: "Beleza" }] },
      { nome: "Vinicius", telefone: 11983927426, id: 8, mensagens: [{ id: 1, mensagem: "Olá" }, { id: 2, mensagem: "Tbm" }] },
      { nome: "Maria de Lurdes", telefone: 11983927256, id: 9, mensagens: [{ id: 1, mensagem: "Bom dia" }, { id: 2, mensagem: "Tranquilo" }] },
      { nome: "Neymar", telefone: 11983927742, id: 10, mensagens: [{ id: 1, mensagem: "Boa noite" }, { id: 2, mensagem: "Tudo bem?" }] },
      { nome: "Sandro Rezende", telefone: 11947227392, id: 11, mensagens: [{ id: 1, mensagem: "Beleza" }, { id: 2, mensagem: "Tudo azul?" }] },
      { nome: "Augusto Pereira", telefone: 11983927392, id: 12, mensagens: [{ id: 1, mensagem: "Boa tarde" }, { id: 2, mensagem: "Beleza" }] }, 
      { nome: "Felipe Luis", telefone: 11983927777, id: 13, mensagens: [{ id: 1, mensagem: "Oi" }, { id: 2, mensagem: "Beleza" }] },
      { nome: "Vinicius", telefone: 11983927426, id: 14, mensagens: [{ id: 1, mensagem: "Olá" }, { id: 2, mensagem: "Tbm" }] },
      { nome: "Maria de Lurdes", telefone: 11983927256, id: 15, mensagens: [{ id: 1, mensagem: "Bom dia" }, { id: 2, mensagem: "Tranquilo" }] }
    ]
  );

  const [mensagem, setMensagem] = useState("");
  const [currentContact, setCurrentContact] = useState("");
  const [alerta, setAlerta] = useState(false);
  const [add, setAdd] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contato} onPress={() => abrir(item.id)} onLongPress={() => exibirAlerta(item.id)}>
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
    if(alerta === false){
      const contato = contatos.find(c => c.id === id);
      setCurrentContact(contato);
    }
  }

  const exibirAlerta = (id) => {
    const contato = contatos.find(c => c.id === id);
    setCurrentContact(contato);
    setAlerta(true);
  }

  const excluir = (id) => {
    const novaListaContatos = contatos.filter(c => c.id !== id);
    setContatos(novaListaContatos);
    setCurrentContact("");
    setAlerta(false);
  }

  const enviarMensagem = () => {
    if (mensagem.trim() !== "") {
      const novaMensagem = { id: Date.now().toString(), mensagem: mensagem };
      const index = contatos.findIndex(c => c.id === currentContact.id);
      const novaLista = [...contatos[index].mensagens, novaMensagem];
      const novoContato = { ...currentContact, mensagens: novaLista };
      const novaListaContatos = [...contatos];
      novaListaContatos[index].mensagens = novaLista;
      setContatos(novaListaContatos)
      setCurrentContact(novoContato);
      setMensagem("");
    }
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
          data={currentContact.mensagens}
          keyExtractor={(item) => item.id}
          renderItem={mensagemItem}
        />
        {currentContact && 
        <View style={styles.containerInput}>
        <TextInput placeholder='Digite algo' style={styles.input} value={mensagem} onChangeText={(text) => setMensagem(text)} />
        <TouchableOpacity style={styles.button} onPress={enviarMensagem}>
          <Image style={styles.img} source={require("./icon_enviar.png")} />
        </TouchableOpacity>
      </View>
        }
      </View>
      {alerta && (
        <View style={styles.alerta}>
          <View>
            <Text style={styles.textMensagem}>Tem certeza?</Text>
          </View>
          <View>
            <Text style={styles.textMensagem}>
              Apagar {currentContact.nome}
            </Text>
          </View>
          <View style={styles.buttonsAlert}>
            <TouchableOpacity style={styles.button} onPress={() => setAlerta(false)}>
              <Text style={styles.textMensagem}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => excluir(currentContact.id)}
            >
              <Text style={styles.textMensagem}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    width: "40%",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    borderRightWidth: 3,
    borderRightColor: "#222222"
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
    width: "60%",
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
    marginBottom: 10,
    alignSelf: "flex-start",
    display: "flex",
    maxWidth: "100%"
  },
  textMensagem: {
    color: "#fff",
    flexWrap: "wrap"
  },
  listMensagens: {
    display: "flex",
    padding: 20,
    width: "100%", 
    scrollbarWidth: "none",
    msOverflowStyle: "none",
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
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 20,
    height: 20
  },
  alerta: {
    width: 400,
    height: 200,
    padding: 20,
    backgroundColor: "#4f4f4f",
    borderRadius: 10,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  buttonsAlert: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    width: "100%"
  }
});
