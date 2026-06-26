//ResultCard

import { StyleSheet, View, Text } from 'react-native';

export function ResultCard({ porcentagem }) {
    return (
        <View style={styles.viewRC}>               
          <Text style={styles.textoRC}>O álcool está custando {porcentagem}% da gasolina.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewRC: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        paddingTop: 5,
        marginTop: 20,
        backgroundColor: 'red',
        width: 300, 
    },

    textoRC: {
        margin: 3,
        color: 'white',
    },
})
