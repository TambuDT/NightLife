import { Text, SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps'; // Importa Marker da react-native-maps
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons'
import * as SplashScreen from 'expo-splash-screen';
import * as Location from 'expo-location'; // Importa il modulo di posizione
SplashScreen.preventAutoHideAsync();

var screenWidth = Dimensions.get('window').width;

export default function Explore() {


  const [zoomLevel, setZoomLevel] = useState(null);
  const [zoomMarker, setZoomMarker] = useState(null);

  const onRegionChange = (region) => {
    const newZoomLevel = Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);
    setZoomLevel(newZoomLevel);
    console.log("Current Coordinates:", region.latitude, region.longitude);
    setZoomMarker({latitude: region.latitude, longitude: region.longitude});
  };

  const onRegionChangeComplete = (region) => {
    console.log("Zoom level:", zoomLevel);
    // Puoi fare qualsiasi altra cosa qui quando lo zoom è completato.
  };



  const [fontsLoaded, fontError] = useFonts({
    'Koulen': require('../assets/fonts/Koulen-Regular.ttf'),
    'Palanquin': require('../assets/fonts/Palanquin-Regular.ttf'),
  });

  const [initialRegion, setInitialRegion] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null); // Aggiungi stato per memorizzare la posizione attuale

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    // Funzione per ottenere la posizione attuale
    const getCurrentLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        const latitudeDelta = 0.01;
        const longitudeDelta = 0.01 * (screenWidth / Dimensions.get('window').height); // Considera l'aspect ratio dello schermo

        // Imposta la posizione attuale come regione iniziale della mappa
        const initialRegion = {
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        };
        setInitialRegion(initialRegion);

        // Salva la posizione attuale
        setCurrentLocation({ latitude, longitude });
      } catch (error) {
        console.error('Error getting location', error);
      }
    };

    getCurrentLocation();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>NightLife</Text>
      </View>
      <View style={styles.feedContainer}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          showsPointsOfInterest={false} // Nascondi i punti di interesse
          onRegionChange={onRegionChange}
          onRegionChangeComplete={onRegionChangeComplete}
        >
          {currentLocation && ( // Aggiungi il marker solo se la posizione attuale è disponibile
            <Marker coordinate={currentLocation} title="tambu.dt" customMarker={<Ionicon name='location-outline' size={24} color="blue" />} />
          )}
          {zoomMarker && (
            <Marker coordinate={zoomMarker} title="Moved Location" />
          )}
        </MapView>
      </View>
    </SafeAreaView>
  );
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
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
