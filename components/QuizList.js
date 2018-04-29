import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native'

class QuizList extends Component {
  state = {

  }

  render(){
    return (
      <View>
        <Text>Hey there, this is the quiz list.</Text>
      </View>
    )
  }
}

export default (QuizList)