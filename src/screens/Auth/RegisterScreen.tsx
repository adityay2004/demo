import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RegisterScreen: React.FC = () => {
  const [phone, setPhone] = React.useState('');
  const [checked, setChecked] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let's Create Your Account</Text>

      <View style={styles.phoneInputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          status="checked"
          //  ch={checked}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.checkboxLabel}>
          Receive updates and reminders on Whatsapp
        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with</Text>

      <View style={styles.socialContainer}>
        <FontAwesome name="apple" size={28} style={styles.icon} />
        <FontAwesome name="google" size={28} style={styles.icon} />
        <FontAwesome name="facebook" size={28} style={styles.icon} />
      </View>

      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailText}>Email</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        By signing up, I agree to the{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>, including usage of
        Cookies
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#f3f6ee',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  countryCode: {
    fontSize: 16,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#006644',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
    color: '#666',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  icon: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  emailButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
  emailText: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  link: {
    color: '#007AFF',
  },
});
