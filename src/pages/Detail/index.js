import React, { useLayoutEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Dots from '../../components/Dot'
import SizeButton from '../../components/SizeButton'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

export default function Detail ({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Nike Air Max 14'
    }, [navigation])
  })

  return (
    <ScrollView style={styles.container}>

      <View>
        <Image 
          source={require('../../assets/detail.png')}
          style={styles.productImg}
          resizeMode='cover'
        />
      </View>

      <View>
        <View>
          <Text style={[styles.productTitle, { fontSize: 24 }]}>$499.90</Text>
        </View>

        <View>
          <Text style={[styles.productTitle, { fontSize: 30, opacity: 0.4 }]}>Nike Air Max 14</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dots color='#2379f4' />
          <Dots color='#fb6e53' />
          <Dots color='#ddd' />
          <Dots color='#000' />
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor='#17181a' color='#FFF'>39</SizeButton>
            <SizeButton>40</SizeButton>
            <SizeButton>41</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Air Max 14
          </Text>
          <Text style={styles.textContent}>
            With great foam cushioning, the Nike Air max 14 
            is ideal for those looking for lightness and comfort...
          </Text>
          <Text style={styles.textList}>
            - Category: Damping
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh 
          </Text>
        </View>

        <Button />

        <View style={styles.line}/>

        <Footer />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },

  productImg: {
    width: '100%',
    height: Dimensions.get('window').height / 1.5
  },

  productTitle: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },

  dotContainer: {
    flexDirection: 'row',
    marginVertical: '6%'
  },

  textContent: {
    fontSize: 16,
    lineHeight: 25,

    marginVertical: '2%',
    paddingHorizontal: '2%'
  },

  textTitle: {
    fontSize: 22,
    marginVertical: '2%',
  },

  textList: {
    fontSize: 16,
    lineHeight: 25,
  },

  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  },
})
