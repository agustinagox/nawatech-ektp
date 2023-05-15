import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILKtp } from './src/assets/illustrations'
import Button from './src/components/button/button'
import { font } from './src/styles/fonts/fonts'
import { color } from './src/styles/color/color'
import Landing from './src/screens/landing/landing'
import CaptureCard from './src/screens/capture-card/capture-card'
import Registered from './src/screens/registered/registered'
import ResultOcr from './src/screens/result-ocr/result-ocr'
import EditData from './src/screens/edit-data/edit-data'

const App = () => {
  return (
    <>
      {/* <Landing/> */}
      {/* <CaptureCard/> */}
      {/* <Registered/> */}
      {/* <ResultOcr/> */}
      <EditData/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})