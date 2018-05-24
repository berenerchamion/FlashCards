import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import {orange, tan} from "../utils/colors"
import { fetchQuiz } from '../utils/FlashCardsAPI'
import { getQuiz } from '../actions'
import { styles } from '../utils/styles'

function AddQuestionBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosAddQuestionBtn : styles.androidAddQuestionBtn}
      onPress={onPress}>
      <Text style={styles.addQuestionBtnText}>ADD QUESTION</Text>
    </TouchableOpacity>
  )
}

function TakeQuizBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosAddQuestionBtn : styles.androidAddQuestionBtn}
      onPress={onPress}>
      <Text style={styles.addQuestionBtnText}>TAKE QUIZ</Text>
    </TouchableOpacity>
  )
}

class QuizDetails extends Component{

  static navigationOptions = ({ navigation }) =>{
    const {quiz} = navigation.state.params

    return {
      title: 'Quiz: ' + quiz.title
    }
  }

  state= {
    loading: false
  }

  componentDidMount(){
    this.loadQuiz()
  }

  addQuestion = (quiz) => {
    this.props.navigation.navigate('AddQuestion', {quiz: quiz, reloadQuiz: this.loadQuiz})
  }

  takeQuiz = () => {
    console.log('Quiz time!')
  }

  loadQuiz = () => {
    this.setState({
      loading: true
    })

    fetchQuiz(this.props.navigation.state.params.quiz.key).then((quiz) => {
      this.props.dispatch(getQuiz(quiz))

      this.setState({
        loading: false
      })
    })
  }

  render(){
    const { quiz } = this.props

    return(
      <View style={styles.container}>
        <ActivityIndicator animating={this.state.loading} color={orange} />
        <Text style={styles.quizItem}>{quiz.title}</Text>
        <Text style={styles.quizItem}>quizId is {quiz.key}</Text>
        <Text style={styles.quizItem}># of questions: {quiz.questions.length} </Text>
        <AddQuestionBtn onPress={() => { this.addQuestion(quiz)
        }} />
        <TakeQuizBtn onPress={this.takeQuiz} />
      </View>
    )
  }
}

function mapStateToProps (state){
  return{
    quiz: state.quiz
  }

}

export default connect (mapStateToProps, ) (QuizDetails)
