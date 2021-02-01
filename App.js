import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
  let [peso, setPeso] = useState('');
  let [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura /100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      alert('Você está abaixo do peso: ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Você está no peso ideal: ' + imc.toFixed(2));
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso: '+ imc.toFixed(2));
    }else if(imc >= 34.9){
      alert('Você está bastante acima do peso: ' + imc.toFixed(2));
    }
  }


  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (kg)"
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura)}
      placeholder="Altura (cm)"
      keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFFFFF'
  },

  title:{
    textAlign: 'center',
    marginTop: 80,
    fontSize: 25,
    color: 'gray'
  },
  input:{
    backgroundColor: '#f381a7',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    color: 'white',
    fontSize: 16,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 5,
  },
  buttonText:{
    color: 'white',
    fontSize: 18
  }

});