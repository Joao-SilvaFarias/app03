import { StyleSheet, View, FlatList } from "react-native";
import Pessoa from "./components/Pessoa";
import { useState } from "react";

export default function App(){

  const [pessoas, setPessoas] = useState([
    {nome: "Pedro", email: "pedro@gmail.com", idade: 15, id: 1}, 
    {nome: "Pedro", email: "pedro@gmail.com", idade: 15, id: 2}, 
    {nome: "Pedro", email: "pedro@gmail.com", idade: 15, id: 3}, 
    {nome: "Pedro", email: "pedro@gmail.com", idade: 15, id: 4}, 
    {nome: "Pedro", email: "pedro@gmail.com", idade: 15, id: 5}, 
    {nome: "Pedro", email: "pedro@gmail.com", idade: 15, id: 6}, 
    {nome: "Pedro", email: "pedro@gmail.com", idade: 15, id: 7}, 
    {nome: "Pedro", email: "pedro@gmail.com", idade: 15, id: 8}
  ]);

  return(
    <View style={styles.container}>
      <FlatList style={styles.container}
      data={pessoas}
      keyExtractor={(pessoa) => pessoa.id}
      renderItem={({item}) => <Pessoa pessoa={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex", 
    width: "100%", 
    height: "100%", 
    backgroundColor: "#fff"
  }
})