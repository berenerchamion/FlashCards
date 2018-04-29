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

class QuizList extends Component {
  state = {
  }

  render(){
    return (
      <FlatList
        data={[
          {key: 'a', title: 'this is a title'},
          {key: 'b', title: 'this is another title'},
          {key: 'c', title: 'this is yet another title'},
          ]}
        renderItem={({item}) => <Text>{item.key}: {item.title}</Text>}
      />
    )
  }
}

export default (QuizList)
