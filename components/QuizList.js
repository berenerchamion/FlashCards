import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import QuizListItem from './QuizListItem'
import { fetchAllQuizzes } from "../actions"
import { fetchQuizzes } from "../utils/FlashCardsAPI"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
})

class QuizList extends Component {
  state = {
    qs: [],
    ready: false,
  }

  componentDidMount(){
    const { dispatch } = this.props
    fetchQuizzes().then(quizzes => dispatch(fetchAllQuizzes(quizzes)))
  }

  renderItem = ({ item }) => {
    console.log(item)
    return <TouchableOpacity onPress = {() => this.props.navigation.navigate(
      'QuizDetails',
      {quiz: item}
    )}
    >
      <QuizListItem { ...item } />
    </TouchableOpacity>
  }

  render(){
    const { quizzes } = this.props
    return (
      <View style={styles.container}>
        {((quizzes !== null || typeof(quizzes) !== undefined) && quizzes.length > 0)
         ?<FlatList
            data={quizzes}
            renderItem={this.renderItem}
          />
        : <View style={styles.container}>
            <Text>Yeah you need to add a quiz...</Text>
          </View> }
      </View>

    )
  }
}

function mapStateToProps (state){
  return {
    quizzes: state.quizzes
  }
}

export default connect (mapStateToProps,)(QuizList)
