import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Apptheme from '../../../assets/theme/apptheme';
import {FontFamily} from '../../../assets/theme/font';
import CommonButton from '../../../assets/component/CommonButton';

const PersonalDetailsThird = ({onPress}) => {
  // BMI range values
  const minBMI = 15;
  const maxBMI = 40;

  // Reference for the slider width
  const [sliderWidth, setSliderWidth] = useState(300);

  // Initial BMI value state
  const [bmiValue, setBmiValue] = useState(29.8);
  const [bmiCategory, setBmiCategory] = useState('overweight');
  const [categoryColor, setCategoryColor] = useState('#fd7e14');

  // Animated value for marker position
  const markerPosition = useRef(
    new Animated.Value(((bmiValue - minBMI) / (maxBMI - minBMI)) * sliderWidth),
  ).current;

  // Update category based on BMI value
  const updateBMICategory = value => {
    if (value < 18.5) {
      setBmiCategory('underweight');
      setCategoryColor('#dc3545');
    } else if (value >= 18.5 && value < 25) {
      setBmiCategory('healthy');
      setCategoryColor('#28a745');
    } else if (value >= 25 && value < 30) {
      setBmiCategory('overweight');
      setCategoryColor('#fd7e14');
    } else {
      setBmiCategory('obese');
      setCategoryColor('#dc3545');
    }
  };

  // Pan responder for slider interaction
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (_, gestureState) => {
        // When user touches the slider
        markerPosition.setOffset(markerPosition._value);
      },
      onPanResponderMove: (_, gestureState) => {
        // Calculate new position within bounds
        const newPosition = Math.min(Math.max(gestureState.dx, 0), sliderWidth);

        // Update position
        markerPosition.setValue(newPosition);

        // Calculate and update BMI value
        const newBMI = minBMI + (newPosition / sliderWidth) * (maxBMI - minBMI);
        const roundedBMI = parseFloat(newBMI.toFixed(1));

        setBmiValue(roundedBMI);
        updateBMICategory(roundedBMI);
      },
      onPanResponderRelease: () => {
        // When user releases touch
        markerPosition.flattenOffset();
      },
    }),
  ).current;

  const handleSliderPress = event => {
    const {locationX} = event.nativeEvent;
    const boundedX = Math.min(Math.max(locationX, 0), sliderWidth);

    // Animate marker to new position
    Animated.spring(markerPosition, {
      toValue: boundedX,
      useNativeDriver: false,
    }).start();

    // Calculate new BMI value
    const newBMI = minBMI + (boundedX / sliderWidth) * (maxBMI - minBMI);
    const roundedBMI = parseFloat(newBMI.toFixed(1));

    setBmiValue(roundedBMI);
    updateBMICategory(roundedBMI);
  };

  const onSliderLayout = event => {
    const {width} = event.nativeEvent.layout;
    setSliderWidth(width);

    // Initialize marker position
    const initialPosition = ((bmiValue - minBMI) / (maxBMI - minBMI)) * width;
    markerPosition.setValue(initialPosition);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.tittleText}>Personal Details</Text>

        <Text style={styles.bmiTitle}>Your BMI</Text>

        <View style={styles.bmiCard}>
          <View style={styles.infoIconContainer}>
            <Ionicons name="information-circle" size={28} color="#0d6efd" />
          </View>

          <Text style={styles.bmiValue}>
            {bmiValue} <Text style={styles.bmiUnit}>BMI</Text>
          </Text>

          <View
            style={styles.sliderContainer}
            onLayout={onSliderLayout}
            onTouchStart={handleSliderPress}
            {...panResponder.panHandlers}>
            <View style={styles.sliderSegmentRed} />
            <View style={styles.sliderSegmentGreen} />
            <View style={styles.sliderSegmentOrange} />
            <View style={styles.sliderSegmentRed2} />

            <View style={[styles.dividerLine, {left: '14%'}]} />
            <View style={[styles.dividerLine, {left: '40%'}]} />
            <View style={[styles.dividerLine, {left: '60%'}]} />

            <Animated.View
              style={[
                styles.markerLine,
                {
                  left: markerPosition,
                },
              ]}
            />

            <Animated.View
              style={[
                styles.markerDot,
                {
                  left: markerPosition,
                  borderColor: categoryColor,
                },
              ]}
            />
          </View>

          <View style={styles.rangeLabelsContainer}>
            <Text style={styles.rangeLabel}>18.5</Text>
            <Text style={styles.rangeLabel}>25</Text>
            <Text style={styles.rangeLabel}>30</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>
              Your BMI is within the{' '}
              <Text style={[styles.categoryHighlight, {color: categoryColor}]}>
                {bmiCategory}
              </Text>{' '}
              range
            </Text>
          </View>
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
  lineView: {
    height: 2,
    backgroundColor: Apptheme.color.borderColor,
  },
  bottomView: {
    paddingBottom: 40,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  bmiTitle: {
    marginBottom: 20,
    fontFamily: FontFamily.INTER600,
    fontSize: 20,
    color: Apptheme.color.text,
    marginTop: 20,
  },
  bmiCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    position: 'relative',
  },
  infoIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  bmiValue: {
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: FontFamily.INTER600,
    fontSize: 24,
    color: Apptheme.color.text,
  },
  bmiUnit: {
    fontFamily: FontFamily.INTER600,
    fontSize: 14,
    color: Apptheme.color.text,
  },
  sliderContainer: {
    height: 6,
    flexDirection: 'row',
    marginBottom: 10,
    position: 'relative',
  },
  sliderSegmentRed: {
    flex: 14,
    backgroundColor: '#dc3545',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  sliderSegmentGreen: {
    flex: 26,
    backgroundColor: '#28a745',
  },
  sliderSegmentOrange: {
    flex: 20,
    backgroundColor: '#fd7e14',
  },
  sliderSegmentRed2: {
    flex: 40,
    backgroundColor: '#dc3545',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  markerLine: {
    position: 'absolute',
    height: 30,
    width: 2,
    backgroundColor: '#000',
    bottom: 0,
    transform: [{translateX: -1}],
  },
  markerDot: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 2,
    bottom: 25,
    transform: [{translateX: -8}],
  },
  dividerLine: {
    position: 'absolute',
    height: 12,
    width: 1,
    backgroundColor: '#25c',
    borderStyle: 'dashed',
    bottom: -3,
    opacity: 0.5,
  },
  rangeLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '14%',
    marginTop: 5,
    marginBottom: 20,
  },
  rangeLabel: {
    fontFamily: FontFamily.INTER600,
    fontSize: 12,
    color: Apptheme.color.text,
  },
  categoryContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  categoryText: {
    textAlign: 'center',
    fontFamily: FontFamily.INTER500,
    fontSize: 14,
    color: Apptheme.color.text,
  },
  categoryHighlight: {
    fontWeight: 'bold',
  },
});

export default PersonalDetailsThird;
