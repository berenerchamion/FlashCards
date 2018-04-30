import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default function QuizListItem ({ title, subtitle }) {
  return (
    <Text style={styles.item}>{title}: {subtitle}</Text>
  )
}