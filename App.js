import { View, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import Tarefa from "./components/Tarefa";
import ButtonMais from "./components/BtnMais";

const App = () => {

  const [tarefas, setTarefas] = useState([
    {id: 1, titulo: "Tarefa 1"}, 
    {id: 2, titulo: "Tarefa 2"}, 
    {id: 3, titulo: "Tarefa 3"}, 
    {id: 4, titulo: "Tarefa 4"}, 
    {id: 5, titulo: "Tarefa 5"}, 
    {id: 6, titulo: "Tarefa 6"}, 
    {id: 7, titulo: "Tarefa 7"}
  ]);

  return(
    <View style={styles.container}>
      <FlatList 
      data={tarefas} 
      keyExtractor={tarefa => tarefa.id}
      renderItem={({item}) => <Tarefa tarefa={item}/>}
      />
      <ButtonMais/>
    </View>
  )
}
export default App;


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#444444", 
    width: "100%", 
    height: "100%"
  }
});