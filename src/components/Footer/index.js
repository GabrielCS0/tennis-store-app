import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Shoes from '../Shoes'

export default function Footer () {
  return (
    <View>
      <Text style={styles.title}>Recommended for you</Text>

      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 14 }}>
            <Shoes img={require('../../assets/5.png')} cost='$299.90' name='Nike Joyride'/>
          </View>

          <View style={{ marginHorizontal: 14 }}>
            <Shoes img={require('../../assets/3.png')} cost='$299.90' name='Nike Air Max'/>
          </View>

          <View style={{ marginHorizontal: 14 }}>
            <Shoes img={require('../../assets/4.png')} cost='$299.90' name='Nike XXX'/>
          </View>
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',

    marginVertical: '2%',
    paddingHorizontal: '2%'
  }
})
