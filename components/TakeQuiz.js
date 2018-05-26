import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Animated,
} from 'react-native'
import { styles } from '../utils/styles'
import { setLocalNotification, clearLocalNotification } from "../utils/helpers"

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
      title: 'Take the Quiz: ' + quiz.title
    }
  }

  state = {
    questionIndex: 0,
    correctCount: 0,
    numberOfQuestionsAnswered: 0,
    showAnswer: false,
  }

  toggleCard = () => {
    this.setState({
      showAnswer: !this.state.showAnswer,
    })
  }

  markIncorrect = () => {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
      showAnswer: ! this.state.showAnswer,
      numberOfQuestionsAnswered: this.state.numberOfQuestionsAnswered + 1,
    })
  }

  markCorrect = () => {
        this.setState({
          questionIndex: this.state.questionIndex + 1,
          correctCount: this.state.correctCount + 1,
          showAnswer: ! this.state.showAnswer,
          numberOfQuestionsAnswered: this.state.numberOfQuestionsAnswered + 1,
        })
  }

  resetQuiz = () => {
    this.setState({
      questionIndex: 0,
      correctCount: 0,
      numberOfQuestionsAnswered: 0,
      showAnswer: false,
      fadeIn: new Animated.Value(0),
    })
  }

  render(){
    const { quiz } = this.props
    const {
      questionIndex,
      correctCount,
      numberOfQuestionsAnswered,
      showAnswer,
    } = this.state

    let totalNumQuestions = quiz.questions.length

    //reset the notification if the quiz was completed
    if (questionIndex === quiz.questions.length)
    {
      clearLocalNotification()
      setLocalNotification()
    }

    return(

      <View style={styles.container}>
        { (questionIndex === quiz.questions.length)
          ?
          <View style={styles.quizHeader}>
            <Text style={styles.item}>Question {questionIndex} of {totalNumQuestions}</Text>
            <Text style={styles.item}>Final Score: {correctCount/totalNumQuestions*100}%</Text>
            <View style={styles.buttonBlock}>
              <TouchableOpacity
                style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
                onPress={()=>{
                  this.resetQuiz()
                }}>
                <Text style={styles.submitBtnText}>Do-Over???</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
                onPress={()=>{
                  this.props.navigation.goBack()
                }}>
                <Text style={styles.submitBtnText}>Back to Deck???</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={styles.container}>
            <View style={styles.quizHeader}>
              <Text style={styles.item}>Question {questionIndex+1} of {totalNumQuestions}</Text>
              <Text style={styles.item}>Tally: {correctCount} / {numberOfQuestionsAnswered}</Text>
            </View>
            {(showAnswer)
              ?<View style={styles.container}>
                <Animated.View style={styles.card}>
                  <Text style={styles.item}>{quiz.questions[questionIndex].answer}</Text>
                </Animated.View>
                  <View style={styles.buttonBlock}>
                    <TouchableOpacity
                      style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
                      onPress={()=>{
                        this.markCorrect()
                      }}>
                      <Text style={styles.submitBtnText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
                      onPress={()=>{
                        this.markIncorrect()
                      }}>
                      <Text style={styles.submitBtnText}>Incorrect</Text>
                    </TouchableOpacity>
                  </View>
              </View>
              :<View style={styles.container}>
                <Animated.View style={styles.card}>
                  <Text style={styles.item}>{quiz.questions[questionIndex].question}</Text>
                </Animated.View>
                <View style={styles.buttonBlock}>
                  <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
                    onPress={()=>{
                      this.toggleCard()
                    }}>
                    <Text style={styles.submitBtnText}>Show Answer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          </View>
        }

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
