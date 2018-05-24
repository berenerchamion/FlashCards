import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { styles } from '../utils/styles'

class TakeQuiz extends Component {

  static navigationOptions = ({ navigation }) =>{
    const {quiz} = navigation.state.params

    return {
      title: 'Quiz: ' + quiz.title
    }
  }

  state = {
    questionIndex: 0,
    correctCount: 0,
    takeQuizNotification: false,
  }

  render(){
    const {quiz} = this.props
    const {questionIndex, correctCount, takeQuizNotificaiton} = this.state
    return(
      <View style={styles.container}>
        <Text>Hey there, let's take a quiz...</Text>
      </View>
    )
  }


}

function mapStateToProps(state) {
  return {
    quiz: state.quiz
  }
}

export default connect(mapStateToProps)(TakeQuiz)