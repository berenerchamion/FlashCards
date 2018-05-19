import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native'
import {orange, tan} from "../utils/colors"
import {fetchQuiz} from "../utils/FlashCardsAPI"
import {getQuiz} from '../actions/index'

function AddQuestionBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosAddQuestionBtn : styles.androidAddQuestionBtn}
      onPress={onPress}>
      <Text style={styles.addQuestionBtnText}>ADD QUESTION</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 22
  },
  quizItem: {
    flex: 1,
    padding: 5,
    fontSize: 22,
    height: 40,
  },
  addQuestionBtnText: {
    color: tan,
    fontSize: 22,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 22,
  },
  iosAddQuestionBtn: {
    backgroundColor: orange,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidAddQuestionBtn: {
    backgroundColor: orange,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class QuizDetails extends Component{

  state= {
    loading: false
  }

  componentDidMount(){
    this.loadQuiz()
  }

  loadQuiz = () => {
    this.setState({ loading: true })

    const { dispatch } = this.props

    fetchQuiz(this.props.navigation.state.params.quiz.key)
      .then((quiz) => {
        dispatch(getQuiz(quiz))
        this.setState({ loading: false })
      })
  }

  addQuestion = () => {

  }

  render(){

    const { quiz } = this.props

    return(
      <View style={styles.container}>
        <Text style={styles.quizItem}>{quiz.title}</Text>
        <Text style={styles.quizItem}>quizId is {quiz.key}</Text>
        <Text style={styles.quizItem}># of questions: {quiz.questions.length}</Text>
        <AddQuestionBtn onPress={this.addQuestion} />
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
