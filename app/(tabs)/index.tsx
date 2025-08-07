import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SecondScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5141/5141534.png' }} // ✅ Replace with your logo URL
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Content in center */}
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5141/5141534.png' }} // ✅ Replace with better soft pink illustration if you want
          style={styles.image}
        />

        <Text style={styles.heading}>Beauty Services at Your Doorstep</Text>
        <Text style={styles.subtext}>
          Book professional beauty services from verified beauticians in the comfort of your home
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/LoginScreen')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 60,
    marginBottom: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ff6b81',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtext: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ff6b81',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 10,
    shadowColor: '#ff6b81',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
