import { View, Text, StyleSheet } from "react-native";

const Tarefa = ({tarefa}) => {
    return(
        <View style={styles.tarefa}>
            <Text style={styles.txtTarefa}>{tarefa.titulo}</Text>
        </View>
    )
}
export default Tarefa;

const styles = StyleSheet.create({
    tarefa: {
        display: "flex",
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        width: "100%", 
        padding: 20, 
        backgroundColor: "#666666", 
        borderRadius: 10, 
        marginBottom: 20
    }, 
    txtTarefa: {
        color: "#fff"
    }
});