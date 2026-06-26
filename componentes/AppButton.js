//AppButton

import { StyleSheet, Button } from 'react-native';

export function AppButton({ onPress }) {
    return (
        <Button 
            title='Verificar vantagem' 
            color={'red'}
            onPress={onPress}
    ></Button>
    )
}


const styles = StyleSheet.create({
    viewAB: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        paddingTop: 5,
        marginTop: 20,
        backgroundColor: 'red',
        width: 200, 
    },

    textoAB: {
        margin: 3,
        color: 'white',
        fontWeight: 'bold',
    },
})
