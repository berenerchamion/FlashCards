import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native'
import { addNewQuiz } from '../actions'
import { uuidv4, addQuiz } from '../utils/FlashCardsAPI'
import { tan, orange } from '../utils/colors'
import { NavigationActions } from 'react-navigation'
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

    if (title !== '' && title !== null){
      this.props.dispatch(addNewQuiz({
        key: key,
        title,
        questions: [],
      }))

      addQuiz(key, title)

      this.setState(() => ({
        id: null,
        title: null,
      }))
      this.toHome()
    }
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddQuiz'}))
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
            onChangeText={(title)=> this.setState({title})}
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
