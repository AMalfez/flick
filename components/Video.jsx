import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Video = () => {
  return (
    <View style={styles.video_container}>
      <Text>3s Video</Text>
    </View>
  )
}

export default Video

const styles = StyleSheet.create({
    video_container:{
        borderWidth:1,
        flex:0.55
    }
})