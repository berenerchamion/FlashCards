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
      title: 'Take the Quiz: ' + quiz.title
    }
  }

  state = {
    questionIndex: 0,
    correctCount: 0,
    numberOfQuestionsAnswered: 0,
    takeQuizNotification: false,
    showAnswer: false,
  }


  //Function to tur the card back and forth like a flash card kinda thing
  toggleCard = () => {
    this.setState({
      showAnswer: ! this.state.showAnswer
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

  render(){
    const { quiz } = this.props
    const {
      questionIndex,
      correctCount,
      takeQuizNotificaiton,
      numberOfQuestionsAnswered,
      showAnswer
    } = this.state

    var totalNumQuestions = quiz.questions.length

    //Visually the array needs to show 0 as 1 so don't forget that.

    return(

      <View style={styles.container}>
        { (questionIndex === quiz.questions.length)
          ?
          <View style={styles.quizHeader}>
            <Text style={styles.item}>Question {questionIndex} of {totalNumQuestions}</Text>
            <Text style={styles.item}>Final Score: {correctCount/totalNumQuestions*100}%</Text>
            <TouchableOpacity
              style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
              onPress={()=>{
                this.props.navigation.goBack()
              }}>
              <Text style={styles.submitBtnText}>Quiz List</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={styles.container}>
            <View style={styles.quizHeader}>
              <Text style={styles.item}>Question {questionIndex+1} of {totalNumQuestions}</Text>
              <Text style={styles.item}>Tally: {correctCount} / {numberOfQuestionsAnswered}</Text>
            </View>
            {(showAnswer)
              ?<View style={styles.card}>
                <Text style={styles.item}>{quiz.questions[questionIndex].answer}</Text>
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

              :<View style={styles.card}>
                <Text style={styles.item}>{quiz.questions[questionIndex].question}</Text>
                <View>
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