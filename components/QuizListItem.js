import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'
import { styles } from '../utils/styles'

export default function QuizListItem ({ title, questions}) {
  return (
    <Text style={styles.quizItem}>{title} - #Questions: {questions.length}</Text>
  )
}
