import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native'

class QuizDetails extends Component{

  render(){

    const { quizId } = this.props

    return(
      <View>
        <Text>Hello there - alomst got it. </Text>
        <Text>quizId is {quizId}</Text>
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }){
  const { quizId } = navigation.state.params

  return{
    quizId,
  }

}

export default connect (mapStateToProps, ) (QuizDetails)
