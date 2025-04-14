import { View, Text, StyleSheet } from "react-native";

const Pessoa = ({ pessoa }) => {
    return (
        <View style={styles.pessoa}>
            <Text style={styles.txtPessoa}>{pessoa.nome}</Text>
            <Text style={styles.txtPessoa}>{pessoa.email}</Text>
            <Text style={styles.txtPessoa}>{pessoa.idade}</Text>
        </View>
    )
}

export default Pessoa;

const styles = StyleSheet.create({
    pessoa: {
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: 10,
        backgroundColor: "#222",
        padding: 20
    },
    txtPessoa: {
        color: "#fff"
    }
});