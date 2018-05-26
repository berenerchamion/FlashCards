import React from 'react'
import {
  Animated,
} from 'react-native'
import { styles } from '../utils/styles'

export default function QuizListItem ({ title, questions, fontSize}) {
  return (
    <Animated.Text style={[styles.quizItem, {fontSize: fontSize}]}>{title} - #Questions: {questions.length}</Animated.Text>
  )
}
