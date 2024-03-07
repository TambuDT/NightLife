import { useCallback } from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


export default function Login(navigation) {
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
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#0a0a0a' }} behavior='padding'>
      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <View style={styles.formContainer}>
            <Text style={styles.logo}>NightLife</Text>
            <Text style={styles.testo}>Please login with your credentials !</Text>
            <View style={{ height: 20, }}></View>
            <TextInput keyboardAppearance='dark' placeholder='Email' placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} style={styles.inputText}></TextInput>
            <View style={{ height: 30, }}></View>
            <TextInput keyboardAppearance='dark' placeholder='Password' placeholderTextColor="#999" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} style={styles.inputText}></TextInput>
            <View style={{ height: 30, }}></View>
            <TouchableOpacity style={styles.loginButton} onPress={() => console.log("Login pressed")}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={{ height: 30, }}></View>
            <TouchableOpacity onPress={() => navigation}><Text style={styles.testo}>Don't have an account ? <Text style={{color:'#008170',textAlign:'center'}}>Sign Up</Text></Text></TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Koulen',
    fontSize: 55,
    color: '#fff',
  },
  testo: {
    color: '#fff',
    fontSize: 15,
    marginTop: -10,
  },
  inputText: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    width: 300,
    height: 50,
    textAlign: 'left',
    color: '#fff',
    fontSize: 17,
    padding: 15,
  },
  loginButton: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor:'#fff',
    borderRadius: 10,
    width:300,
    height:50,
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText:{
    color:'#000',
    fontSize:17,
  },
});
