import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function SizeButton (props) {
  return (
    <View style={[styles.container, { backgroundColor: props.bgColor || '#FFF' }]}>
      <Text style={[styles.text, { color: props.color || '#c9c' }]}> {props.children} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 135,
    height: 50,
    marginHorizontal: 10,
  
    borderRadius: 4,
    borderColor: '#e6e6e6',
    borderWidth: 3,

    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18
  }
})
