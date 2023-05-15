import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {font} from '../../styles/fonts/fonts';
import {ILKtp} from '../../assets/illustrations';
import Button from '../../components/button/button';
import {color} from '../../styles/color/color';
import Header from '../../components/header/header';

const Landing = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.white}}>
      <Header />
      <View style={{flex: 1, paddingHorizontal: 24}}>
        <Text
          style={{
            fontFamily: font.SansBold,
            fontSize: 36,
            color: color.primaryDark,
            lineHeight: 32,
          }}>
          Let’s verify Your Identiy
        </Text>
        <Text
          style={{
            fontFamily: font.SansMedium,
            color: color.primaryGrey,
            fontSize: 16,
            marginTop: 14,
          }}>
          We are required to verify your identity before you can use this
          Landinglication. Your information will be encrypted and secure.
        </Text>
        <View style={{marginTop: 60, alignSelf: 'center'}}>
          <Image
            source={ILKtp}
            style={{width: 225, height: 130, resizeMode: 'stretch'}}
          />
        </View>
      </View>
      <View style={{padding: 24}}>
        <Button type="primary" label="Verify Identity" />
      </View>
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({});
