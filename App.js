import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import DetalhesSignos from './DetalhesSignos'
import ListaSignos from './ListaSignos'
import {NativeRouter as Router, Switch, Route} from 'react-router-native'

export default class App extends Component {
  render() {

    return (
        <Router>
          <View style={styles.container}>
            <Switch>
              <Route path='/:pageId' component={DetalhesSignos}></Route>
              <Route path='/' component={ListaSignos}></Route>
            </Switch>
          </View>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
