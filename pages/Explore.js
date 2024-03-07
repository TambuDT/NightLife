import { Text, SafeAreaView, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Post from '../components/Post';
SplashScreen.preventAutoHideAsync();

var screenWidth = Dimensions.get('window').width;

export default function Explore() {
  const [fontsLoaded, fontError] = useFonts({
    'Koulen': require('../assets/fonts/Koulen-Regular.ttf'),
    'Palanquin': require('../assets/fonts/Palanquin-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>NightLife</Text>
      </View>
      <View style={styles.feedContainer}>
        <ScrollView horizontal={false} >
       <Post></Post>
       </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  logo: {
    fontFamily: 'Koulen',
    color: '#fff',
    fontSize: 30,
  },
  logoContainer: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    width: screenWidth,
  },
  feedContainer: {
    backgroundColor: 'red',
    flex:1,
    alignItems:'center',
    padding:10,
  },
});
