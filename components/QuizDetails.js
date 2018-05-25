import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import {orange, tan} from '../utils/colors'
import { fetchQuiz } from '../utils/FlashCardsAPI'
import { getQuiz } from '../actions'
import { styles } from '../utils/styles'

function AddQuestionBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
      onPress={onPress}>
      <Text style={styles.addQuestionBtnText}>ADD QUESTION</Text>
    </TouchableOpacity>
  )
}

function TakeQuizBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
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

  takeQuiz = (quiz) => {
    this.props.navigation.navigate('TakeQuiz', {quiz: quiz})
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
        <View style={styles.quizHeader}>
          <Text style={styles.item}>{quiz.title}</Text>
          <Text style={styles.item}># of questions: {quiz.questions.length} </Text>
        </View>
        <View style={styles.buttonBlock}>
          <AddQuestionBtn onPress={() => { this.addQuestion(quiz)
          }} />
          {quiz.questions.length> 0 &&
          <TakeQuizBtn onPress={() => { this.takeQuiz(quiz)
          }} />}
        </View>
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
