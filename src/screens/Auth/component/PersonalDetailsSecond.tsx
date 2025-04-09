import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Apptheme from '../../../assets/theme/apptheme';
import {FontFamily} from '../../../assets/theme/font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../../assets/component/CommonButton';

const PersonalDetailsSecond: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.tittleText}>Personal Details</Text>
        <Text style={styles.heading}>What's your date of birth?</Text>
        <View style={styles.input}>
          <View />
          <Ionicons
            name="calendar-outline"
            size={22}
            color={Apptheme.color.tealGreen}
          />
        </View>

        <Text style={styles.heading}>What's your height?</Text>
        <View style={styles.input}>
          <View />
          <Ionicons
            name="chevron-down"
            size={22}
            color={Apptheme.color.tealGreen}
          />
        </View>

        <Text style={styles.heading}>What's your weight?</Text>
        <View style={styles.input}>
          <View />
          <Ionicons
            name="chevron-down"
            size={22}
            color={Apptheme.color.tealGreen}
          />
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

export default PersonalDetailsSecond;

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
  heading: {
    fontFamily: FontFamily.INTER600,
    fontSize: 15.5,
    color: Apptheme.color.text,
    marginTop: 36,
    marginLeft: 4,
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
    justifyContent: 'space-between',
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
