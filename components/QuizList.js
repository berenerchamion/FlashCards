import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import QuizListItem from './QuizListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
})

class QuizList extends Component {
  state = {
    quizzes: [],
  }

  componentDidMount(){
    this.setState({
      quizzes: [
        {key: 'a', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 'b', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'c', title: 'this is yet another title', subtitle: 'this is a subtitle'},
        {key: 'd', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 'e', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'f', title: 'this is yet another title', subtitle: 'this is a subtitle'},
        {key: 'g', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 'h', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'i', title: 'this is yet another title', subtitle: 'this is a subtitle'},
        {key: 'j', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 'b', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'l', title: 'this is yet another title', subtitle: 'this is a subtitle'},
        {key: 'm', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 'n', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'o', title: 'this is yet another title', subtitle: 'this is a subtitle'},
        {key: 'p', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 'q', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'r', title: 'this is yet another title', subtitle: 'this is a subtitle'},
        {key: 's', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 't', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'u', title: 'this is yet another title', subtitle: 'this is a subtitle'},
        {key: 'v', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 'w', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'x', title: 'this is yet another title', subtitle: 'this is a subtitle'},
        {key: 'y', title: 'this is a title', subtitle: 'this is a subtitle'},
        {key: 'z', title: 'this is another title', subtitle: 'this is a subtitle'},
        {key: 'aa', title: 'this is yet another title', subtitle: 'this is a subtitle'},
      ]
    })
  }

  renderItem = ({ item }) => {
    return <QuizListItem { ...item } />
  }

  render(){
    const quizzes = this.state.quizzes

    return (
      <View style={styles.container}>
        <FlatList
          data={quizzes}
          renderItem={this.renderItem}
        />
      </View>

    )
  }
}

export default (QuizList)
