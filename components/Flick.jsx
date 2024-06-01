import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoComp from './VideoComp'
import Selfie from './Selfie'

const Flick = ({index, video, selfie}) => {
  return (
    <View style={styles.flick_container}>
      <Text style={styles.text_container}>{index}.</Text>
      <VideoComp video={video}/>
      <Selfie selfie={selfie}/>
    </View>
  )
}

export default Flick

const styles = StyleSheet.create({
    flick_container: {
        flex:0.33,
        flexDirection: 'row',
        marginBottom:30
      },
    text_container:{
        flex: 0.1,
        fontWeight:'600'
    }
})