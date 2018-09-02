import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signos from './signo.json'
import DetalhesSignos from './DetalhesSignos'

export default class App extends Component {
  render() {
    return(
      <DetalhesSignos idSigno={1}></DetalhesSignos>
    );


    return (
      <View style={styles.container}>
        {signos.map((signo,key)=>(
          <Button key={key} title={signo.nome} onPress={()=> console.log('clicou')}></Button>
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
