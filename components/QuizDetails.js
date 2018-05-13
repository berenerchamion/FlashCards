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
import {addQuiz} from "../utils/FlashCardsAPI"
import {addNewQuiz} from "../actions"

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
  item: {
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

  addQuestion = () => {

  }

  render(){

    const { quiz } = this.props

    return(
      <View>
        <Text>{quiz.title}</Text>
        <Text>quizId is {quiz.key}</Text>
        <Text># of questions: {quiz.questions.length}</Text>
        <AddQuestionBtn onPress={this.addQuestion} />
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
