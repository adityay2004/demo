import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Apptheme from '../../../assets/theme/apptheme';
import {FontFamily} from '../../../assets/theme/font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../../assets/component/CommonButton';

const PersonalDetailsFirst: React.FC<{onPress: () => void}> = ({onPress}) => {
  const [selectGender, setSelectgender] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.tittleText}>Personal Details</Text>
        <Text style={styles.headingText}>Tell us about yourself</Text>
        <Text style={styles.heading}>What's your name?</Text>
        <View>
          <Text style={styles.inputHeader}>First Name</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={{marginTop: 8}}>
          <Text style={styles.inputHeader}>First Name</Text>
          <TextInput style={styles.input} />
        </View>
        <Text style={styles.heading}>What's your gender at birth?</Text>
        <View style={styles.rowView}>
          <TouchableOpacity
            style={[
              styles.input,
              selectGender === 'male' && styles.selectInput,
            ]}
            onPress={() => setSelectgender('male')}>
            <Ionicons name="male" size={22} color={Apptheme.color.subText} />
            <Text
              style={[
                styles.inputHeader,
                {marginTop: 0, marginLeft: 8},
                selectGender === 'male' && styles.selectInput,
              ]}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.input,
              selectGender === 'female' && styles.selectInput,
            ]}
            onPress={() => setSelectgender('female')}>
            <Ionicons name="female" size={22} color={Apptheme.color.subText} />
            <Text
              style={[
                styles.inputHeader,
                {marginTop: 0, marginLeft: 8},
                selectGender === 'female' && styles.selectInput,
              ]}>
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.lineView} />
      <View style={styles.bottomView}>
        <CommonButton
          buttonText="Next"
          onPress={() => onPress()}
          buttonStyle={{
            width: '40%',
          }}
        />
      </View>
    </View>
  );
};

export default PersonalDetailsFirst;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
  tittleText: {
    fontFamily: FontFamily.INTER600,
    fontSize: 14.5,
    color: Apptheme.color.subText,
    marginTop: 3,
  },
  headingText: {
    fontFamily: FontFamily.INTER600,
    fontSize: 20.5,
    color: Apptheme.color.text,
    marginTop: 16,
  },
  heading: {
    fontFamily: FontFamily.INTER600,
    fontSize: 15.5,
    color: Apptheme.color.text,
    marginTop: 36,
  },
  inputHeader: {
    fontFamily: FontFamily.INTER500,
    fontSize: 14.5,
    color: Apptheme.color.subText,
    marginTop: 14,
    marginLeft: 4,
    marginBottom: 1,
  },
  input: {
    height: Apptheme.spacing.textBoxHeight,
    fontSize: 13.5,
    color: Apptheme.color.subText,
    fontFamily: FontFamily.INTER500,
    borderRadius: 8,
    paddingHorizontal: 14,
    borderWidth: 2,
    borderColor: Apptheme.color.borderColor,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectInput: {
    borderColor: Apptheme.color.steelTeal,
    backgroundColor: '#f1faf9',
    color: Apptheme.color.steelTeal,
  },
  rowView: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  lineView: {
    height: 2,
    backgroundColor: Apptheme.color.borderColor,
  },
  bottomView: {
    paddingBottom: 40,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
