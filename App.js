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
import { Constants } from 'expo'
import { brown } from './utils/colors'
import reducer from './reducers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function FlashCardsStatusBar ({backgroundColor, ...props}){
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {

  componentDidMount(){
    console.log("Hey there...")
    debugger
    console.log("This is pretty cool...")
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <FlashCardsStatusBar backgroundColor={brown} barStyle="light-content" />
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    )
  }
}

