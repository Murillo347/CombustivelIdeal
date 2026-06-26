//App

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { AppButton } from './componentes/AppButton';
import { ResultCard } from './componentes/ResultCard';

export default function App() {
  
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const [ideal, setIdeal] = useState('');
  const [porcentagem, setPorcentagem] = useState();


  function obterTudo() {
    obterIdeal();
    obterPorcentagem();
  }

  function obterIdeal() {
    if (alcool < gasolina * 0.7) {
      const ideal = 'Álcool';
      setIdeal('Álcool');
    } else {
      const ideal = 'Gasolina';
      setIdeal('Gasolina');
    }
  }

  function obterPorcentagem() {
    if (alcool < gasolina * 0.7) {
      const porcentagem = alcool * 100 / gasolina;
      setPorcentagem(porcentagem.toFixed(2)); 
    } else {
      const porcentagem = gasolina * 100 / alcool;
      setPorcentagem(porcentagem.toFixed(2));
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.texto}>Álcool ou Gasolina?</Text>
      </View>
      <Image 
        source={require('./assets/shell.png')} 
        style={{width: 150}}
      />
      <View style={styles.entradaA}>
        <Text style={styles.texto2}>Insira o valor do álcool:</Text>
        <TextInput 
          style={styles.input} 
          placeholder='--> R$00,00' 
          placeholderTextColor={'red'}
          onChangeText={setAlcool}
          value={alcool}
          ></TextInput>
      </View>
      <View style={styles.entradaA}>
        <Text style={styles.texto2}>Insira o valor da gasolina:</Text>
        <TextInput 
          style={styles.input} 
          placeholder='--> R$00,00' 
          placeholderTextColor={'red'}
          onChangeText={setGasolina}
          value={gasolina}
          ></TextInput>
      </View>
      <View style={styles.entradaB}>
        <AppButton onPress={obterTudo} porcentagem={porcentagem}/>
        <Text style={styles.texto3}>{ideal} é o ideal</Text>
      </View>
      <ResultCard porcentagem={porcentagem}/>
      <StatusBar style="auto"/> 
    </View>

  );
}

const styles = StyleSheet.create({

  topo: {
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    width: '100%',
  },

  entradaA: {
    borderRadius: 10,
    padding: 10,
    paddingTop: 5,
    marginTop: 20,
    backgroundColor: 'red',
    width: 200, 
  },

  entradaB: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    paddingTop: 5,
    marginTop: 20,
    backgroundColor: 'red',
    width: 200, 
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },

  texto2: {
    margin: 3,
    color: 'white',
    fontWeight: 'bold',
  },

  texto3: {
    color: 'white',
    fontWeight: 'bold',
  },

  input: {
    color: 'red',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  }


});
