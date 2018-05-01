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
import { uuidv4 } from '../utils/FlashCardsAPI'
import { tan, orange } from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 22
  },
  item: {
    flex: 1,
    padding: 5,
    fontSize: 20,
    height: 40,
  },
  submitBtnText: {
    color: tan,
    fontSize: 22,
    textAlign: 'center',
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
    quizId: 'Hi there!',
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
    console.log("Got a submit...")
  }

  render(){
    const { quizId } = this.state
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.item}>This is the add quiz screen...</Text>
        <Text style={styles.item}>quizId: {quizId}</Text>
        <TextInput
          style={{height: 40}}
          autoCapitalize="words"
          maxLength={50}
          placeholder="Give your quiz a name..."
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
