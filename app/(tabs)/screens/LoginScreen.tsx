import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    Alert.alert('Success', `Logged in with\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2965/2965300.png' }} // Beauty app logo
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.welcome}>Welcome back to</Text>
            <Text style={styles.brand}>Pretty Saheli</Text>
            <Text style={styles.subtitle}>Your personal beauty companion</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              placeholder="your@email.com"
              value={email}
              onChangeText={setEmail}
              style={[
                styles.input,
                isFocusedEmail && styles.inputFocused
              ]}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#c4a6b5"
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              style={[
                styles.input,
                isFocusedPassword && styles.inputFocused
              ]}
              secureTextEntry
              placeholderTextColor="#c4a6b5"
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
            />

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/300/300221.png' }} // Google icon
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    tintColor: '#ff6b81',
  },
  welcome: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
    fontFamily: 'Avenir-Medium',
  },
  brand: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Avenir-Heavy',
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    fontFamily: 'Avenir-Book',
  },
  formContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    marginLeft: 5,
    fontFamily: 'Avenir-Medium',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Avenir-Book',
  },
  inputFocused: {
    borderColor: '#ff6b81',
    backgroundColor: '#fff',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: '#ff6b81',
    fontSize: 14,
    fontFamily: 'Avenir-Medium',
  },
  button: {
    backgroundColor: '#ff6b81',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#ff6b81',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Avenir-Heavy',
    letterSpacing: 0.5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#eee',
  },
  dividerText: {
    color: '#999',
    paddingHorizontal: 10,
    fontFamily: 'Avenir-Book',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 20,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#333',
    fontSize: 14,
    fontFamily: 'Avenir-Medium',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#999',
    fontSize: 14,
    fontFamily: 'Avenir-Book',
  },
  signupLink: {
    color: '#ff6b81',
    fontSize: 14,
    fontFamily: 'Avenir-Heavy',
  },
});