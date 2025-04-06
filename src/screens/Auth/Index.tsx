import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {FontFamily} from '../../assets/theme/font';
import Apptheme from '../../assets/theme/apptheme';
import ImageSources from '../../assets/images/ImageSources';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
import {AppNavigationProp} from '../../navigation/types/navigationType';

const {height} = Dimensions.get('window');
const Index: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#ffe8c8', '#faf9f4', '#badfe7']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>
            Hi there! {'\n'}Telling us about yourself helps to personalize your
            Dario experience
          </Text>
          <Text style={styles.sectionSubtitle}>
            We take your privacy seriously, All of your personal information is
            completely {'\n'}confidential
          </Text>

          <Image
            source={ImageSources.hospital_image}
            style={styles.imageView}
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(RouteName.REGISTER_SCREEN)}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Apptheme.color.background,
    paddingTop: Apptheme.spacing.paddingTop,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Apptheme.spacing.screenPaddingHorizontal,
    paddingTop: 60,
  },
  sectionTitle: {
    fontFamily: FontFamily.INTER500,
    fontSize: 22,
    color: Apptheme.color.text,
    paddingRight: 66,
    lineHeight: 30,
  },
  sectionSubtitle: {
    fontFamily: FontFamily.INTER500,
    fontSize: 14.5,
    color: Apptheme.color.subText,
    marginTop: 16,
    paddingRight: 66,
    lineHeight: 21.5,
  },
  button: {
    backgroundColor: Apptheme.color.steelTeal,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 25,
    width: '47%',
  },
  buttonText: {
    fontFamily: FontFamily.INTER500,
    fontSize: 14,
    color: Apptheme.color.whiteText,
  },
  imageView: {
    height: height / 2.8,
    width: '110%',
    alignSelf: 'center',
    marginTop: 60,
  },
  buttonView: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 20,
  },
});

export default Index;
