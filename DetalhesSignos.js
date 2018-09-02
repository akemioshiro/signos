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
        <Text style={styles.title}>{signo.nome}</Text>
        <Text style={styles.text}>{signo.caracteristica}</Text>
        <Text style={styles.date}>{signo.periodo.join(' até ')}</Text>
        <Button title='Voltar' onPress={()=>console.log('clique aqui para voltar')}></Button>
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
    padding:15
  },
  title:{
      fontSize:30,
      marginBottom:10,
      fontWeight:'bold'
  },
  text:{
      fontSize:25,
      marginBottom:10
  },
  date:{
      fontSize:25
  }
});
