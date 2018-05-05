import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { addNewQuiz } from '../actions'
import { uuidv4, addQuiz } from '../utils/FlashCardsAPI'
import { tan, orange } from '../utils/colors'
import { NavigationActions } from 'react-navigation'

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
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddQuiz extends Component{

  state={
    quizId: null,
    quizTitle: null,
  }

  componentDidMount(){
    let key = uuidv4()
    this.setState({
      quizId: key
    })
    console.log(key)
  }

  submit = () => {
    const quizId = this.state
    const quizTitle = this.state
    console.log("Got a submit...")

    this.props.dispatch(addNewQuiz({
      [quizId]: quizTitle
    }))

    this.setState(() => ({
      quiId: null,
      quizTitle: null,
    }))

    addQuiz(quizId, quizTitle)

    this.toHome()

  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddQuiz'}))
  }

  render(){
    const { quizId } = this.state
    const { quizTitle } = this.state
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.item}>Create a quiz by entering a name and submitting it. Then you can add questions to it.</Text>
        <TextInput
          style={[styles.textInput, {height: 40}]}
          autoCapitalize="words"
          underlineColorAndroid={orange}
          maxLength={50}
          placeholder="Give your quiz a name..."
          value={quizTitle}
          onChangeText={(quizTitle)=> this.setState({quizTitle})}
        />
        <SubmitBtn onPress={this.submit} />
        <View style={{height: 100}} />
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps (state){
  return {

  }
}

export default connect (mapStateToProps) (AddQuiz)
