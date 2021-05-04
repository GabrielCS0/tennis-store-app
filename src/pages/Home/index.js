import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Shoes } from '../../components/Shoes'
import { useNavigation } from '@react-navigation/native'

export default function Home () {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Image
          source={require('../../assets/banner.png')}
          style={styles.banner}
        />

        <View style={styles.descriptionContainer}>
          <Text style={styles.headerText}>TENNIS</Text>
          <Text style={[styles.headerText, { color: '#CECECF' }]}>-</Text>
          <Text style={[styles.headerText, { color: '#CECECF' }]}>Male</Text>
          <TouchableOpacity style={styles.filter}>
            <MaterialIcons
              name="filter-list"
              size={30}
              color="#000"
            />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.headerText}>Releases</Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/2.png')} cost='$499.90' name='Nike Air Max 14' 
            onClick={() => navigation.navigate('Detail')} />
          <Shoes img={require('../../assets/1.png')} cost='$399.90' name='Nike Air Max 9' 
            onClick={() => alert('click')} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost='$999.90' name='Nike Squidward' 
            onClick={() => alert('click')} />
          <Shoes img={require('../../assets/4.png')} cost='$299.90' name='Nike Downshift' 
            onClick={() => alert('click')} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost='$429.90' name='Nike Joyride' 
            onClick={() => alert('click')} />
          <Shoes img={require('../../assets/6.png')} cost='$229.90' name='Nike Epic React Flyknit 11' 
            onClick={() => alert('click')} />
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },

  haeder: {
    marginBottom: 8,
  },

  banner: {
    width: '100%'
  },

  descriptionContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%', 
    marginVertical: '3%',
  },

  headerText: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },

  filter: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center'
  },

  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2
  }
})
