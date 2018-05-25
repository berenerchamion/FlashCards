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
    })
  }

  markCorrect = () => {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
      correctCount: this.state.correctCount + 1,
      showAnswer: ! this.state.showAnswer,
    })

  }

  render(){
    const { quiz } = this.props
    const { questionIndex, correctCount, takeQuizNotificaiton, showAnswer } = this.state
    var totalNumQuestions = quiz.questions.length

    //Visually the array needs to show 0 as 1 so don't forget that.

    return(
      <View style={styles.container}>
        <Text style={styles.item}>Question {questionIndex+1} of {totalNumQuestions}</Text>
        <Text style={styles.item}>Current Score: {correctCount/(questionIndex+1)*100}%</Text>
        {(showAnswer)
          ?<View>
            <Text style={styles.item}>{quiz.questions[questionIndex].answer}</Text>
            <View>
              <TouchableOpacity
                onPress={()=>{
                  this.markCorrect()
                }}>
                <Text style={styles.item}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{
                  this.markIncorrect()
                }}>
                <Text style={styles.item}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>

          :<View>
          <Text style={styles.item}>{quiz.questions[questionIndex].question}</Text>
          <View>
          <TouchableOpacity
            onPress={()=>{
              this.toggleCard()
            }}>
          <Text style={styles.item}>Show Answer</Text>
          </TouchableOpacity>
          </View>
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