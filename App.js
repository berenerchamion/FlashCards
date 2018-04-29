import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { brown, orange } from './utils/colors'
import reducer from './reducers'

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
        <View style={ {flex: 1} }>
          <FlashCardsStatusBar backgroundColor={orange} barStyle="light-content" />
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    )
  }
}

