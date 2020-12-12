import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import LottieView from 'lottie-react-native'
import * as Progress from 'react-native-progress'

import colors from '../config/colors'

export default UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        { progress < 1 ? 
        <Progress.Bar
          progress={progress}
          color={colors.primary}
          width={200}
         /> :
        <LottieView
          style={styles.animation}
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
          source={require('../assets/animations/done.json')}
          />}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  animation: {
    width: 150
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})