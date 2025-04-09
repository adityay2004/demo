/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontFamily} from '../../../assets/theme/font';
import Apptheme from '../../../assets/theme/apptheme';
import CommonButton from '../../../assets/component/CommonButton';

const PersonalDetailsFourth = ({onPress}) => {
  const [selectedConditions, setSelectedConditions] = useState({
    diabetes: false,
    hypertension: false,
    weightManagement: false,
  });

  const toggleCondition = condition => {
    setSelectedConditions(prev => ({
      ...prev,
      [condition]: !prev[condition],
    }));
  };

  const ConditionButton = ({title, iconName, condition}) => {
    const isSelected = selectedConditions[condition];
    return (
      <TouchableOpacity
        style={[
          styles.conditionButton,
          isSelected ? styles.selectedButton : styles.unselectedButton,
        ]}
        onPress={() => toggleCondition(condition)}>
        <View
          style={[
            styles.iconContainer,
            isSelected ? styles.selectedIconBg : styles.unselectedIconBg,
          ]}>
          <Ionicons
            name={iconName}
            size={24}
            color={isSelected ? '#0D6D75' : '#F98C2B'}
          />
        </View>
        <Text style={styles.conditionText}>{title}</Text>
        <View
          style={[
            styles.checkContainer,
            isSelected ? styles.selectedCheck : styles.unselectedCheck,
          ]}>
          {isSelected && (
            <Ionicons name="checkmark-sharp" size={16} color="#0D6D75" />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.tittleText}>Personal Details</Text>
        <Text style={styles.heading}>
          Which conditions do you want to manage?
        </Text>

        <View style={styles.conditionsContainer}>
          <ConditionButton
            title="Diabetes"
            iconName="arrow-down"
            condition="diabetes"
          />

          <ConditionButton
            title="Hypertension"
            iconName="heart"
            condition="hypertension"
          />

          <ConditionButton
            title="Weight management"
            iconName="scale"
            condition="weightManagement"
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
    marginTop: 26,
    marginLeft: 4,
    marginBottom: 18,
  },
  conditionsContainer: {
    paddingHorizontal: 2,
  },
  conditionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 32,
    marginBottom: 16,
    borderWidth: 1,
    marginTop: 6,
  },
  selectedButton: {
    borderColor: '#E1F3F5',
    backgroundColor: '#F5FBFB',
  },
  unselectedButton: {
    borderColor: '#FFF4EA',
    backgroundColor: '#FFFAF5',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  selectedIconBg: {
    backgroundColor: '#E1F3F5',
  },
  unselectedIconBg: {
    backgroundColor: '#FFF4EA',
  },
  conditionText: {
    flex: 1,
    fontFamily: FontFamily.INTER600,
    fontSize: 15.5,
    color: Apptheme.color.text,
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  selectedCheck: {
    borderColor: '#0D6D75',
    backgroundColor: '#FFFFFF',
  },
  unselectedCheck: {
    borderColor: '#BBBBBB',
    backgroundColor: '#FFFFFF',
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

export default PersonalDetailsFourth;
