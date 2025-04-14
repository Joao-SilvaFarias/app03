import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native"

const ButtonMais = () => {

    const alerta = () => {
        Alert.alert("Sem função");
        alert("Sem função");
    }

    return (
        <TouchableOpacity onPress={alerta} style={styles.button}>
            <Text style={styles.txt}>+</Text>
        </TouchableOpacity>
    )
}
export default ButtonMais;

const styles = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height: 60,
        width: 60,
        backgroundColor: "#666666",
        borderWidth: 1,
        borderColor: "#222222",
        position: "absolute",
        left: "50%",
        bottom: 10,
        transform: "translate(-50%, -50%)"
    },
    txt: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "900"
    }
});