import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    item: {
      padding: 15,
      fontSize: 20,
      height: 60,
    },
})

export default function QuizListItem ({ title, subtitle }) {
  return (
    <Text style={styles.item}>{title}: {subtitle}</Text>
  )
}
