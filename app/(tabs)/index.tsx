import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Illustration */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5141/5141534.png' }}
        style={styles.image}
      />

      {/* Heading */}
      <Text style={styles.heading}>Beauty Services at Your Doorstep</Text>

      {/* Subtext */}
      <Text style={styles.subtext}>
        Book professional beauty services from verified beauticians in the comfort of your home
      </Text>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, { backgroundColor: '#e0e0e0' }]} />
        <View style={[styles.dot, { backgroundColor: '#e91e63' }]} />
        <View style={[styles.dot, { backgroundColor: '#e0e0e0' }]} />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 20,
    marginBottom: 32,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
  },
  subtext: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  button: {
    backgroundColor: '#e91e63',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
