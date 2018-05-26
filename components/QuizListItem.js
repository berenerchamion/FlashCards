import React from 'react'
import {
  Animated,
  View,
  Text,
} from 'react-native'
import { styles } from '../utils/styles'

export default function QuizListItem ({ title, questions, fontSize}) {
  return (
    <View>
      <Animated.Text style={[styles.quizItem, {fontSize: fontSize}]}>{title}</Animated.Text>
      <Text style={styles.quizItemQuestions}> # Questions: {questions.length}</Text>
    </View>

  )
}
