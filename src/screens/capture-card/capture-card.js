import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {font} from '../../styles/fonts/fonts';
import {ILKtp} from '../../assets/illustrations';
import Button from '../../components/button/button';
import {color} from '../../styles/color/color';
import Header from '../../components/header/header';
import {ScanImage} from '../../assets/dummy';
import Gap from '../../components/gap/gap';

const CaptureCard = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Header />
      <View style={{flex: 1}}>
        <Text
          style={{
            paddingHorizontal: 24,
            fontFamily: font.SansBold,
            fontSize: 36,
            color: color.primaryDark,
          }}>
          Photo ID Card
        </Text>
        <View style={{width: '100%', height: 345, marginTop: 35, padding: 12}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'stretch',
              borderRadius: 12,
              padding: 12,
            }}
            source={ScanImage}
          />
        </View>
      </View>
      <View style={{padding: 24}}>
        <Button type="primary" label="Continue" />
        <Button type="secondary" label="Try Again" />
      </View>
    </SafeAreaView>
  );
};

export default CaptureCard;

const styles = StyleSheet.create({});
