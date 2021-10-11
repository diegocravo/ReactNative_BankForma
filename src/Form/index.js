import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function Form() {
  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    {key: 1, sexo: 'Feminino'},
    {key: 2, sexo: 'Masculino'},
    {key: 3, sexo: 'Outro'},
  ]);
  const [valor, setValor] = useState(250);
  const [contaUniversitaria, setContaUniversitaria] = useState(false);

  let sexoItem = sexo.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.sexo} />;
  });

  const alerta = () => {
    Alert.alert(
      'Conta Criada com Sucesso',
      name +
        sobrenome +
        ', sexo: ' +
        sexo[sexoSelecionado].sexo +
        ', limite: R$ ' +
        valor.toFixed(0) +
        ',00',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={value => setName(value)}
          placeholder="Digite o seu Nome"
        />

        <Text style={styles.text}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          value={sobrenome}
          onChangeText={value => setSobrenome(value)}
          placeholder="Digite o seu Sobrenome"
        />

        <Text style={styles.text}>Sexo</Text>
        <Picker
          selectedValue={sexoSelecionado}
          onValueChange={(itemValue, itemIndex) => {
            setSexoSelecionado(itemValue);
          }}>
          {sexoItem}
        </Picker>

        <Text style={styles.text}>Limite</Text>
        <Slider
          minimumValue={0}
          maximumValue={2000}
          value={valor}
          onValueChange={valorSelecionado => setValor(valorSelecionado)}
          style={styles.slider}
          minimumTrackTintColor="#4630EB"
          thumbTintColor="#4630EB"
        />
        <Text style={styles.sliderText}>R$ {valor.toFixed(0)},00</Text>

        <Text style={styles.text}>Conta Universitária</Text>
        <Switch
          value={contaUniversitaria}
          onValueChange={status => setContaUniversitaria(status)}
          // trackColor={{false: 'red', true: '#00ff00'}}
          thumbColor={contaUniversitaria ? '#4630EB' : '#ddd'}
          style={styles.switch}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={alerta}>
          <Text style={styles.buttonText}>ABRIR CONTA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 35,
  },
  text: {
    marginLeft: 12,
    marginBottom: -10,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  slider: {
    marginTop: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  slider: {
    marginTop: 20,
  },
  sliderText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4630EB',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4630EB',
    padding: 10,
    margin: 12,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});
