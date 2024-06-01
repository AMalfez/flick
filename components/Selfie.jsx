import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Selfie = () => {
  return (
    <View style={styles.selfie_container}>
      <Text>Selfie</Text>
    </View>
  )
}

export default Selfie

const styles = StyleSheet.create({
    selfie_container:{
        borderWidth: 1,
        flex: 0.35
    }
})