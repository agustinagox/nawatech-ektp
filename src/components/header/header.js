import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {ICArrowLeft, ICPencil} from '../../assets/icons';
import {font} from '../../styles/fonts/fonts';
import {color} from '../../styles/color/color';
import {ProfileImg, ScanImage} from '../../assets/dummy';
import {Image} from 'react-native';

const Header = ({onPress, type, title, icon}) => {
  return (
    <>
      {type === 'profile' ? (
        <View
          style={{
            backgroundColor: color.primaryLightGray,
            borderBottomRightRadius: 70,
            borderBottomLeftRadius: 70,
            paddingBottom: 24,
          }}>
          <TouchableOpacity
            onPress={onPress}
            style={{padding: 24, flexDirection: 'row', alignItems: 'center'}}>
            <ICArrowLeft />
            <Text
              style={{
                fontSize: 24,
                fontFamily: font.SansMedium,
                color: color.primaryDark,
                marginLeft: 20,
                marginRight: 8
              }}>
              {title}
            </Text>
            {icon ? <ICPencil /> : undefined}
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <Image
              source={ProfileImg}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={onPress} style={{padding: 24}}>
          <ICArrowLeft />
        </TouchableOpacity>
      )}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
