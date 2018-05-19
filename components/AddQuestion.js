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
  submitBtnText: {
    color: tan,
    fontSize: 22,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 22,
  },
  iosSubmitBtn: {
    backgroundColor: orange,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidSubmitBtn: {
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

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
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
    const { question } = this.state
    const { answer } = this.state


    this.setState(() => ({
      question: null,
      answer: null,
    }))

  }

  render(){

    const { question } = this.state
    const { answer } = this.state

    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.item}>Add a question and answer and click save...</Text>
        <TextInput
          style={[styles.textInput, {height: 40}]}
          autoCapitalize="sentences"
          underlineColorAndroid={orange}
          maxLength={50}
          placeholder="Enter the question here..."
          value={question}
          onChangeText={(question)=> this.setState({question})}
        />
        <TextInput
          style={[styles.textInput, {height: 40}]}
          autoCapitalize="sentences"
          underlineColorAndroid={orange}
          maxLength={50}
          placeholder="Enter the answer here..."
          value={answer}
          onChangeText={(answer)=> this.setState({answer})}
        />
        <SubmitBtn onPress={this.submit} />
        <View style={{height: 100}} />
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps (state, { navigation }){
  const { quiz } = navigation.state.params

  return{
    quiz
  }

}

export default connect (mapStateToProps) (AddQuestion)