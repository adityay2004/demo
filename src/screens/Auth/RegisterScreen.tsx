import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Apptheme from '../../assets/theme/apptheme';
import {FontFamily} from '../../assets/theme/font';
import CommonButton from '../../assets/component/CommonButton';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {AppNavigationProp} from '../../navigation/types/navigationType';
import {useNavigation} from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';

const RegisterScreen: React.FC = () => {
  const [phone, setPhone] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerRight}>Already a User?</Text>

        <Text style={styles.headerText}>Health App</Text>
      </View>
      <View style={styles.bodyView}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <Text
            style={[
              styles.headerText,
              {color: Apptheme.color.text, fontSize: 16.5},
            ]}>
            Lets's Create Your Account
          </Text>
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
              color={Apptheme.color.tealGreen}
            />
            <Text style={styles.checkboxLabel}>
              Receive updates and reminders on Whatsapp
            </Text>
          </View>

          <View style={styles.buttonView}>
            <CommonButton
              buttonText="Continue"
              onPress={() => {
                navigation.navigate(RouteName.OTP_VERIFICATION_SCREEN);
              }}
              buttonStyle={{
                width: '100%',
              }}
            />
          </View>

          <View style={styles.orView}>
            <LinearGradient
              start={{x: 1, y: 0.5}}
              end={{x: 0, y: 0.5}}
              colors={['#f6f6f6', '#9f9f9f']}
              style={styles.line}
            />
            <Text style={styles.orText}>or continue with</Text>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              colors={['#f6f6f6', '#9f9f9f']}
              style={styles.line}
            />
          </View>

          <TouchableOpacity style={styles.emailButton}>
            <>
              <Fontisto name="email" size={16} color={Apptheme.color.text} />
              <Text style={styles.emailText}>Email</Text>
            </>
          </TouchableOpacity>
          <View style={styles.socialContainer}>
            <View style={styles.icon}>
              <FontAwesome name="apple" size={24} />
            </View>

            <View style={styles.icon}>
              <FontAwesome name="google" size={24} />
            </View>

            <View style={styles.icon}>
              <Ionicons name="logo-facebook" size={24} color={'#1577ef'} />
            </View>
          </View>
        </ScrollView>

        <Text style={styles.footer}>
          By signing up, I agree to the{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>, including usage of
          Cookies
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Apptheme.color.tealGreen,
    paddingTop: Apptheme.spacing.paddingTop,
  },
  bodyView: {
    backgroundColor: Apptheme.color.background,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 26,
    paddingHorizontal: Apptheme.spacing.screenPaddingHorizontal,
    flex: 1,
  },
  headerView: {
    paddingHorizontal: Apptheme.spacing.screenPaddingHorizontal,
    paddingVertical: 24,
  },
  headerText: {
    marginBottom: 20,
    fontFamily: FontFamily.INTER600,
    fontSize: 18.5,
    color: Apptheme.color.whiteText,
    textAlign: 'center',
  },
  headerRight: {
    marginBottom: 20,
    fontFamily: FontFamily.INTER500,
    fontSize: 11.5,
    color: Apptheme.color.whiteText,
    textAlign: 'right',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 3,
    backgroundColor: Apptheme.color.whiteBackground,
    borderWidth: 1,
    borderColor: Apptheme.color.borderColor,
  },
  countryCode: {
    marginRight: 8,
    fontSize: 14.5,
    color: Apptheme.color.text,
    fontFamily: FontFamily.INTER500,
  },
  phoneInput: {
    flex: 1,
    height: Apptheme.spacing.textBoxHeight,
    fontSize: 12.5,
    color: Apptheme.color.text,
    fontFamily: FontFamily.INTER500,
    borderRadius: 10,
    backgroundColor: Apptheme.color.whiteBackground,
    paddingHorizontal: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 26,
  },
  checkboxLabel: {
    fontSize: 11.5,
    color: Apptheme.color.subText,
    fontFamily: FontFamily.INTER500,
  },
  buttonView: {
    paddingTop: 0,
  },
  orView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  orText: {
    marginHorizontal: 6,
    fontSize: 13.5,
    fontFamily: FontFamily.INTER500,
    color: Apptheme.color.subText,
  },
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    gap: 20,
  },
  icon: {
    padding: 10,
    backgroundColor: Apptheme.color.whiteBackground,
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailButton: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: Apptheme.color.whiteBackground,
    borderRadius: 6,
    marginTop: 22,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 13.5,
    fontFamily: FontFamily.INTER500,
    color: Apptheme.color.text,
    marginLeft: 14,
  },
  footer: {
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
    lineHeight: 18,
    fontSize: 11.5,
    fontFamily: FontFamily.INTER400,
    color: Apptheme.color.subText,
    paddingBlock: 16,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
