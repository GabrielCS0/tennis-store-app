import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Shoes (props) {

  function descFilter (desc) {
    if (desc.length < 22) return desc

    return `${desc.substring(0, 21)}...`
  } 

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image 
        source={props.img}
        style={styles.shoesImg}
      />

      <Text style={styles.shoesText}>
        {descFilter(props.name)}
      </Text>

      <View style={{ opacity: 0.4 }}>
        <Text style={styles.shoesText}>{props.cost}</Text>
      </View>
    </TouchableOpacity>
  )
}

export { Shoes }

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shoesImg: {
    width: 175,
    height: 175,
  },

  shoesText: {
    fontSize: 16
  },
})