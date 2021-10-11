import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Form from './src/Form';

function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    {key: 1, nome: 'Golf 1.6', valor: 62000},
    {key: 2, nome: 'Saveiro', valor: 70000},
    {key: 3, nome: 'Gol', valor: 36000},
    {key: 4, nome: 'Onyx', valor: 36000},
  ]);
  const [valor, setValor] = useState(50);
  const [status, setStatus] = useState(false);

  let carrosItem = carros.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.nome} />;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bank Account</Text>
      <Form />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#4630EB',
  },
});
