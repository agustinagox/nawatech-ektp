import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {font} from '../../styles/fonts/fonts';
import {ILKtp, ILSuccessRegis} from '../../assets/illustrations';
import Button from '../../components/button/button';
import {color} from '../../styles/color/color';
import Header from '../../components/header/header';
import {ScanImage} from '../../assets/dummy';
import Gap from '../../components/gap/gap';

const Registered = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Header />
      <View style={{flex: 1, paddingHorizontal: 24, marginTop: 24}}>
        <Image
          source={ILSuccessRegis}
          style={{width: '100%', resizeMode: 'contain', maxHeight: 367}}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 34,
          }}>
          <Text
            style={{
              fontFamily: font.SansBold,
              fontSize: 24,
              color: color.primaryDark,
            }}>
            Register Successfully
          </Text>
          <Text
            style={{
              fontFamily: font.SansRegular,
              fontSize: 14,
              color: color.primaryDark,
              marginTop: 9,
            }}>
            Everything will be fine !
          </Text>
        </View>
        <Gap height={60} />
        <Button type="primarySuccess" label="Done" />
      </View>
    </SafeAreaView>
  );
};

export default Registered;

const styles = StyleSheet.create({});
