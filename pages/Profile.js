import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:'#fff'}}>Profile</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0F0F0F',
    },
});