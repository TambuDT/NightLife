import { useCallback, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import DatePicker from 'react-native-date-picker';
SplashScreen.preventAutoHideAsync();

export default function Signup() {
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
                        <Text style={styles.logo}>Sign up</Text>
                        <Text style={styles.testo}>Fill all fields to create an account</Text>
                        <View style={{ height: 20, }}></View>
                        <TextInput keyboardAppearance='dark' placeholder='Name' placeholderTextColor="#999" autoCapitalize="none" autoCorrect={false} style={styles.inputText}></TextInput>
                        <View style={{ height: 20, }}></View>
                        <TextInput keyboardAppearance='dark' placeholder='Surname' placeholderTextColor="#999" autoCapitalize="none" autoCorrect={false} style={styles.inputText}></TextInput>
                        <View style={{ height: 30, }}></View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <TextInput keyboardAppearance='dark' placeholder='DD' placeholderTextColor="#999" keyboardType="numeric"  autoCapitalize="none" autoCorrect={false} style={styles.inputDate}></TextInput>
                        <TextInput keyboardAppearance='dark' placeholder='MM' placeholderTextColor="#999" keyboardType="numeric" autoCapitalize="none" autoCorrect={false} style={styles.inputDate}></TextInput>
                        <TextInput keyboardAppearance='dark' placeholder='AAAA' placeholderTextColor="#999" keyboardType="numeric" autoCapitalize="none" autoCorrect={false} style={styles.inputDate}></TextInput>
                        </View>
                        <View style={{ height: 10, }}></View>
                        <TextInput keyboardAppearance='dark' placeholder='Email' placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} style={styles.inputText}></TextInput>
                        <View style={{ height: 20, }}></View>
                        <TextInput keyboardAppearance='dark' placeholder='Password' placeholderTextColor="#999" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} style={styles.inputText}></TextInput>
                        <View style={{ height: 20, }}></View>
                        <TextInput keyboardAppearance='dark' placeholder='Confirm Password' placeholderTextColor="#999" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} style={styles.inputText}></TextInput>
                        <View style={{ height: 20, }}></View>
                        <TouchableOpacity style={styles.loginButton} onPress={() => console.log("Next")}>
                            <Text style={styles.loginText}>Sign Up</Text>
                        </TouchableOpacity>
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
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 300,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: '#000',
        fontSize: 17,
    },
    inputDate:{
        width:85,
        marginTop:-10,
        margin:10,
        height:50,
        borderRadius: 10,
        backgroundColor: '#1c1c1c',
        textAlign:'center',
        color: '#fff',
        fontSize: 17,
    }
});