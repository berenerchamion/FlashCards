import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { styles } from '../utils/styles'

function CorrectBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosAddQuestionBtn : styles.androidAddQuestionBtn}
      onPress={onPress}>
      <Text style={styles.addQuestionBtnText}>GOT IT</Text>
    </TouchableOpacity>
  )
}

function IncorrectBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosAddQuestionBtn : styles.androidAddQuestionBtn}
      onPress={onPress}>
      <Text style={styles.addQuestionBtnText}>OOOPS</Text>
    </TouchableOpacity>
  )
}

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
    const { quiz } = this.props
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

export default connect(mapStateToProps, )(TakeQuiz)