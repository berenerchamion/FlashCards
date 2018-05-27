import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Platform,
} from 'react-native'
import {
  NavigationActions,
  StackActions,
}
  from 'react-navigation'
import {addNewQuiz, getQuiz} from '../actions'
import {uuidv4, addQuiz } from '../utils/FlashCardsAPI'
import { orange } from '../utils/colors'
import { styles } from '../utils/styles'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddQuiz extends Component{

  static navigationOptions = ({ navigation }) =>{

    return {
      title: 'Add a New Quiz... '
    }
  }

  state={
    id: null,
    title: null,
  }

  componentDidMount(){
    let key = uuidv4()
    this.setState({
      id: key
    })
  }

  submit = () => {
    const { id } = this.state
    const { title } = this.state
    const key = id

    //Android hack for navigation issues
    Keyboard.dismiss()

    if (title !== '' && title !== null){
      this.props.dispatch(addNewQuiz({
        key: key,
        title,
        questions: [],
      }))

      addQuiz(key, title)

      this.props.dispatch(getQuiz({
        key: key,
        title,
        questions: [],
      }))

      let q  = {
        key: key,
        title,
        questions: [],
      }

      this.setState(() => ({
        id: null,
        title: null,
      }))

      this.toQuiz(q)
    }
  }

  toQuiz = (q) => {
    this.props.navigation.navigate('QuizDetails', {quiz: q})
  }

  toQuizImproved = (q) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'QuizDetails',
      params: {quiz: q},
    })
    this.props.navigation.dispatch(navigateAction)
  }

  toQuizImprovedMore = (q) => {
    const navigateAction = NavigationActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({routeName: 'Quizzes'}),
        NavigationActions.navigate({routeName: 'QuizDetails', params: {quiz: q},}),
      ]
    })
    this.props.navigation.dispatch(navigateAction)
  }

  render(){
    const { title } = this.state
    return(
      <View style={styles.container}>
        <Text style={styles.item}>Create a quiz by entering a name and submitting it. Then you can add questions to it.</Text>
        <KeyboardAvoidingView style={{flex: 2}} behavior="padding" enabled>
          <TextInput
            style={[styles.textInput, {height: 40}]}
            autoCapitalize="words"
            underlineColorAndroid={orange}
            maxLength={50}
            placeholder="Give your quiz a name..."
            value={title}
            onChangeText={ title=> this.setState({title}) }
          />
          <SubmitBtn onPress={this.submit} />
          <View style={{height: 100}} />
        </KeyboardAvoidingView>
      </View>

    )
  }
}

function mapStateToProps (state){
  return {

  }
}

export default connect (mapStateToProps) (AddQuiz)
