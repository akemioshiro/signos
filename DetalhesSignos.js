import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signos from './signo.json'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            signo:undefined
        }
    }


    componentDidMount(){
        this.setState({
            signo: signos
            .filter((signo,key)=>this.props.idSigno===key)
            .shift()
        })
    }


  render() {
    const {idSigno} = this.props
    const {signo}=this.state
    
    if(!signo){
        return(
            <View/>
        )
    }

    return (
      <View style={styles.container}>
        <Text>Detalhes Signo: {signo.nome}</Text>
        <Text>{signo.caracteristica}</Text>
        <Text>{signo.periodo.join(' até ')}</Text>
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
