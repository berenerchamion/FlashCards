import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class App extends React.Component {

  componentDidMount(){
    console.log("Hey there...")
    debugger
    console.log("This is pretty cool...")
  }

  render() {
    return (
      <Provider store={{creaetStore(reducer)}}>
      </Provider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

