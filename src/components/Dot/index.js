import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

export default function Dots (props) {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]} />
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.055,
    height: Dimensions.get('window').width * 0.055,
    borderRadius: Dimensions.get('window').width * 0.055 / 2,

    marginHorizontal: '2.5%',
    elevation: 5,
  },
})
