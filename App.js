import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signos from './signo.json'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {signos.map((signo,key)=>(
          <Text key={key}>{signo.nome}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
