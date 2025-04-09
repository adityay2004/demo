import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Apptheme from '../../assets/theme/apptheme';
import PagerView from 'react-native-pager-view';
import {FontFamily} from '../../assets/theme/font';
import ProgressBar from './component/customProgressBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableRipple} from 'react-native-paper';
import PersonalDetailsFirst from './component/PersonalDetailsFirst';
import PersonalDetailsSecond from './component/PersonalDetailsSecond';
import PersonalDetailsThird from './component/PersonalDetailsThird';
import PersonalDetailsFourth from './component/PersonalDetailsFourth';

const ScannerScreen: React.FC = () => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const totalSteps = 4;

  const goToPage = (page: number) => {
    if (pagerRef.current) {
      pagerRef.current.setPage(page);
      setCurrentPage(page);
    }
  };

  const handlePageChange = (e: any) => {
    const newPage = e.nativeEvent.position;
    setCurrentPage(newPage);

    const newStep = Math.floor(newPage / 4);
    const newStage = newPage % 4;

    setCurrentStep(newStep);
    setCurrentStage(newStage);
  };

  const previousStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      goToPage(currentPage - 1);
    } else {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
        goToPage(currentPage - 4);
      }
    }
  };

  const nextStage = () => {
    if (currentStage < 3) {
      setCurrentStage(currentStage + 1);
      goToPage(currentPage + 1);
    } else {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
        setCurrentStage(0);
        goToPage(currentPage + 4);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.backBtnStyle}>
          <TouchableRipple
            style={styles.hitStopbtn}
            onPress={() => previousStage()}>
            <Ionicons
              name="chevron-back"
              size={26}
              color={Apptheme.color.text}
            />
          </TouchableRipple>
        </View>
        <View style={{flex: 1}} />
      </View>
      <ProgressBar
        currentStep={currentStep}
        currentStage={currentStage}
        totalSteps={totalSteps}
      />

      {/* <TouchableOpacity style={styles.button} onPress={nextStage}>
        <Text style={styles.buttonText}>Next Stage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={previousStage}>
        <Text style={styles.buttonText}>Previous Stage</Text>
      </TouchableOpacity> */}

      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        scrollEnabled={false}
        onPageSelected={e => setCurrentPage(e.nativeEvent.position)}>
        <View key="1" style={styles.card}>
          <PersonalDetailsFirst onPress={() => nextStage()} />
        </View>
        <View key="2" style={styles.card}>
          <PersonalDetailsSecond onPress={() => nextStage()} />
        </View>
        <View key="3" style={styles.card}>
          <PersonalDetailsThird onPress={() => nextStage()} />
        </View>
        <View key="4" style={styles.card}>
          <PersonalDetailsFourth onPress={() => nextStage()} />
        </View>
      </PagerView>
    </View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Apptheme.color.whiteBackground,
    paddingTop: Apptheme.spacing.paddingTop,
    paddingHorizontal: Apptheme.spacing.screenPaddingHorizontal,
  },
  pagerView: {
    flex: 1,
  },
  card: {
    backgroundColor: Apptheme.color.whiteBackground,
    flex: 1,
  },
  headerView: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 1.3,
    borderColor: Apptheme.color.borderColor,
    marginTop: 30,
  },
  buttonText: {
    fontFamily: FontFamily.INTER500,
    fontSize: 12.5,
    color: Apptheme.color.text,
    alignSelf: 'center',
  },
  hitStopbtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 120,
    marginTop: -2,
  },
  backBtnStyle: {
    borderRadius: 360,
    overflow: 'hidden',
    marginTop: -3,
    marginLeft: -12,
  },
});
