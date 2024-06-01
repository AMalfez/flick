import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from './Video'
import Selfie from './Selfie'

const Flick = () => {
  return (
    <View style={styles.flick_container}>
      <Text style={styles.text_container}>1.</Text>
      <Video/>
      <Selfie/>
    </View>
  )
}

export default Flick

const styles = StyleSheet.create({
    flick_container: {
        borderWidth: 2,
        flex:0.33,
        flexDirection: 'row'
      },
    text_container:{
        flex: 0.1
    }
})