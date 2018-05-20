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

  }

  addQuestion = (quiz) => {
    this.props.navigation.navigate('AddQuestion', {quiz: quiz})
  }

  takeQuiz = () => {
    console.log('Quiz time!')
  }

  render(){

    const { quiz } = this.props

    return(
      <View style={styles.container}>
        <Text style={styles.quizItem}>{quiz.title}</Text>
        <Text style={styles.quizItem}>quizId is {quiz.key}</Text>
        <Text style={styles.quizItem}># of questions: {quiz.questions.length}</Text>
        <AddQuestionBtn onPress={() => { this.addQuestion(quiz)
        }} />
        <TakeQuizBtn onPress={this.takeQuiz} />
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }){
  const { quiz } = navigation.state.params

  return{
    quiz
  }

}

export default connect (mapStateToProps, ) (QuizDetails)
