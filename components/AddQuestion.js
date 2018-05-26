import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import {orange, tan} from "../utils/colors"
import {addQuestionToQuiz} from '../utils/FlashCardsAPI'
import {addQuestion} from "../actions"
import { styles } from '../utils/styles'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>ADD QUESTION</Text>
    </TouchableOpacity>
  )
}

class AddQuestion extends Component {

  static navigationOptions = ({ navigation }) =>{
    const {quiz} = navigation.state.params

    return {
      title: 'Add a question to ' + quiz.title
    }
  }

  state = {
    question: null,
    answer: null,
  }

  submit = () => {

    if (this.state.question !== '' && this.state.question !== null && this.state.answer != '' && this.state.answer !== null){
      this.props.dispatch(addQuestion(this.state))

      addQuestionToQuiz(this.props.quiz.key, this.state)

      this.setState(() => ({
        question: null,
        answer: null,
      }))
      this.props.navigation.state.params.reloadQuiz()
      this.props.navigation.goBack()
    }
  }

  render(){

    const { question } = this.state
    const { answer } = this.state

    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.item}>Add some questions and answers. When you are done, hit the back arrow back.</Text>
        <TextInput
          style={[styles.textInput, {height: 40, marginBottom: 15}]}
          autoCapitalize="sentences"
          underlineColorAndroid={orange}
          maxLength={50}
          placeholder="Enter the question here..."
          value={question}
          onChangeText={(question)=> this.setState({question})}
        />
        <TextInput
          style={[styles.textInput, {height: 40, marginBottom: 15}]}
          autoCapitalize="sentences"
          underlineColorAndroid={orange}
          maxLength={50}
          placeholder="Enter the answer here..."
          value={answer}
          onChangeText={(answer)=> this.setState({answer})}
        />
        <SubmitBtn onPress={() => { this.submit() }} />
        <View style={{height: 100}} />
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps (state, ){
  return{
    quiz: state.quiz
  }
}

export default connect (mapStateToProps) (AddQuestion)