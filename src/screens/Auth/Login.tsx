import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontFamily} from '../../assets/theme/font';
import Apptheme from '../../assets/theme/apptheme';
import CustomInput from '../../assets/component/CustomInput';
import {useNavigation} from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
import {TouchableRipple} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AppNavigationProp} from '../../navigation/types/navigationType';

const {height} = Dimensions.get('window');

const Login = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigation = useNavigation<AppNavigationProp>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const animation = useRef<Animated.Value>(new Animated.Value(0)?.current);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scaleStyle = {
    transform: [{scale: animation}],
    opacity: animation,
  };

  const handleValidation = () => {
    if (value) {
      if (value.length < 1) {
        setError('Input must be at least 4 characters');
      } else {
        setError('');
        navigation.navigate(RouteName.OTP_VARIFICAION_SCREEN);
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: RouteName.OTP_VARIFICAION_SCREEN }],
        // });
      }
    } else {
      setError('Input must be at least 4 characters wdwdew ');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#254F8C', '#4B8B8A']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.halfScreenGradient}
      />

      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dataman Demonstration Package </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
              <Text style={{color: Apptheme.color.blue}}>Aar</Text>
              <Text style={{color: Apptheme.color.green}}>ogi</Text>
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Existing Patient</Text>
          <Text style={styles.sectionSubtitle}>
            Enter your registered credentials & click login
          </Text>

          <View style={{width: '90%', alignSelf: 'center'}}>
            <CustomInput
              label="Patient UHID / Mobile No."
              value={value}
              onChangeText={text => {
                setValue(text);
                setError('');
              }}
              error={error}
            />

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleValidation()}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.divider} />
          </View>

          <Text style={styles.sectionTitle}>New Registration</Text>
          <Text style={styles.sectionSubtitle}>
            Make yourself register by clicking on new registration.
          </Text>
          <TouchableOpacity
            style={[
              styles.loginButton,
              {
                backgroundColor: Apptheme.color.green,
                width: '90%',
                alignSelf: 'center',
                marginBottom: 16,
              },
            ]}
            onPress={() => setShowModal(true)}>
            <Text style={styles.loginButtonText}>New Registration</Text>
          </TouchableOpacity>
          <TouchableRipple onPress={toggleMenu} style={styles.fabButton}>
            {isOpen ? (
              <Ionicons
                name="close"
                size={32}
                color={Apptheme.color.whiteBackground}
              />
            ) : (
              <AntDesign
                name="bars"
                size={32}
                color={Apptheme.color.whiteBackground}
              />
            )}
          </TouchableRipple>
          <TouchableOpacity
            style={[
              styles.loginButton,
              {
                backgroundColor: Apptheme.color.brightOrange,
                width: '90%',
                alignSelf: 'center',
              },
            ]}
            onPress={() => setShowModal(true)}>
            <Text style={styles.loginButtonText}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.BottomContainer}>
        <View style={[styles.optionContainer]}>
          <TouchableOpacity style={styles.visitCard} onPress={() => {}}>
            <Text style={styles.optionText}>Visited Hospital</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => {}}>
            <FontAwesome5 name="hospital" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Apptheme.color.background,
    paddingTop: Apptheme.spacing.paddingTop,
    zIndex: 100,
  },
  halfScreenGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.35,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Apptheme.spacing.screenPaddingHorizontal,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Apptheme.color.secondaryBackground,
    width: '100%',
    padding: 20,
    borderRadius: 5,
    marginVertical: 12,
    marginTop: 18,
  },
  headerText: {
    fontFamily: FontFamily.INTER600,
    fontSize: 12.5,
    color: Apptheme.color.text,
  },
  card: {
    backgroundColor: Apptheme.color.whiteBackground,
    width: '100%',
    padding: 20,
    borderRadius: 5,
    elevation: 3,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#dfe8f5',
    paddingTop: 0,
    paddingBottom: 2,
    backgroundColor: '#edf1f7',
  },
  logoText: {
    fontFamily: FontFamily.INTER800,
    fontSize: 20.5,
  },
  sectionTitle: {
    fontFamily: FontFamily.INTER700,
    fontSize: 18,
    marginBottom: 2,
    color: Apptheme.color.text,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontFamily: FontFamily.INTER500,
    fontSize: 12.5,
    color: Apptheme.color.subText,
    textAlign: 'center',
    marginBottom: 40,
  },

  loginButton: {
    backgroundColor: Apptheme.color.blue,
    width: '100%',
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 25,
  },
  loginButtonText: {
    fontFamily: FontFamily.INTER500,
    fontSize: 14,
    color: Apptheme.color.whiteText,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    marginBottom: 14,
  },
  divider: {
    flex: 1,
    height: 1.4,
    backgroundColor: '#CCC',
  },
  orText: {
    marginHorizontal: 10,
    fontFamily: FontFamily.INTER500,
    fontSize: 16,
    color: Apptheme.color.text,
  },
  BottomContainer: {
    bottom: 46,
    right: 28,
    alignItems: 'flex-end',
    borderRadius: 28,
  },
  optionContainer: {
    bottom: 80,
    right: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: Apptheme.color.tealBlue,
    height: 48,
    width: 48,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  visitCard: {
    backgroundColor: Apptheme.color.whiteBackground,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 14,
    width: '100%',
  },
  optionText: {
    color: Apptheme.color.text,
    fontSize: 14,
    fontFamily: FontFamily.INTER400,
  },
  fabButton: {
    backgroundColor: Apptheme.color.tealBlue,
    width: 160,
    height: 160,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
