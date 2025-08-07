import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SecondScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the second screen!</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/LoginScreen')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
