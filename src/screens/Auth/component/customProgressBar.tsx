import React from 'react';
import {View, StyleSheet} from 'react-native';

const ProgressBar = ({currentStep, currentStage, totalSteps = 4}) => {
  // Each step has 3 stages (0, 1, 2)
  // currentStep is the major step (0-3)
  // currentStage is the stage within the step (0-2)

  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressBar}>
        {Array(totalSteps)
          .fill(0)
          .map((_, stepIndex) => {
            if (stepIndex < currentStep) {
              return (
                <View
                  key={stepIndex}
                  style={[
                    styles.progressSegment,
                    styles.progressCompleted,
                    stepIndex < totalSteps - 1 ? {marginRight: 4} : {},
                  ]}
                />
              );
            } else if (stepIndex === currentStep) {
              const fillPercentage = ((currentStage + 1) / 4) * 100;

              return (
                <View
                  key={stepIndex}
                  style={[
                    styles.progressSegment,
                    stepIndex < totalSteps - 1 ? {marginRight: 4} : {},
                  ]}>
                  <View style={styles.progressBackground}>
                    <View
                      style={[
                        styles.progressFill,
                        {width: `${fillPercentage}%`},
                      ]}
                    />
                  </View>
                </View>
              );
            } else {
              return (
                <View
                  key={stepIndex}
                  style={[
                    styles.progressSegment,
                    styles.progressRemaining,
                    stepIndex < totalSteps - 1 ? {marginRight: 4} : {},
                  ]}
                />
              );
            }
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    flexDirection: 'row',
    height: 4,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#F9A825',
    borderRadius: 2,
  },
  progressCompleted: {
    backgroundColor: '#F9A825',
  },
  progressRemaining: {
    backgroundColor: '#E0E0E0',
  },
});

export default ProgressBar;
