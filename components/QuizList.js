import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import QuizListItem from './QuizListItem'
import { fetchAllQuizzes } from "../actions"
import { fetchQuizzes } from "../utils/FlashCardsAPI"
import { styles } from '../utils/styles'
import {orange} from "../utils/colors"

class QuizList extends Component {
  state = {
    refreshing: false,
  }

  componentDidMount(){
    const { dispatch } = this.props

    this.setState({
      refreshing: true
    })
    fetchQuizzes().then((quizzes) => {
      if (quizzes){
        dispatch(fetchAllQuizzes(quizzes))
      }
    })
    this.setState({
      refreshing: false
    })
  }

  renderItem = ({ item }) => {
    let bumpSize = new Animated.Value(0)

    const fontSize = bumpSize.interpolate({
      inputRange: [0,0.5,.75],
      outputRange:[20,25,20],
    })

    return <TouchableOpacity onPress = {() =>{
      Animated.timing(
         bumpSize,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
        }).start(() => {
          this.props.navigation.navigate('QuizDetails', {quiz: item})
          bumpSize.setValue(0)
      })
    }}
    >
      <QuizListItem { ...item } fontSize={fontSize}/>
    </TouchableOpacity>
  }

  reloadQuizzes = () => {
    this.setState({
      refreshing: true
    },
      () => {
        const { dispatch } = this.props
        fetchQuizzes().then(quizzes => dispatch(fetchAllQuizzes(quizzes)))
        this.setState({ refreshing: false})
      })
  }

  render(){
    const { quizzes } = this.props
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={this.state.refreshing} color={orange} />
        {((quizzes !== null || quizzes !== undefined) && quizzes.length > 0)
         ?<FlatList
            data={quizzes}
            extraData={this.props}
            refreshing={this.state.refreshing}
            onRefresh={this.reloadQuizzes}
            renderItem={this.renderItem}
          />
        : <View style={styles.container}>
            <Text style={styles.item}>Yeah you need to add a quiz...</Text>
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
