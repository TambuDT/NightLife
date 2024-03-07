import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
var screenWidth = Dimensions.get('window').width;
export default function Post() {
    return (
        <View style={styles.postContainer}>
            <Text>Post</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  postContainer:{
    width:screenWidth*0.95,
    backgroundColor:'#fff',
    height:400,
    borderRadius:20,
}
});

