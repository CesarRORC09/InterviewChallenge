import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export const Loader = () => {
  return (
    <View style={styles.container}>
         <ActivityIndicator size={50} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:'center',
        flex:1,
    }
})