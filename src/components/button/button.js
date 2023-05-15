import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../styles/color/color';
import {font} from '../../styles/fonts/fonts';

const Button = ({type, label,}) => {
  return (
    <>
      {type === 'primary' ? (
        <TouchableOpacity
          style={{
            backgroundColor: color.primaryBlue,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: color.primaryLight,
              fontSize: 16,
              fontFamily: font.SansMedium,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {type === 'primarySuccess' ? (
        <TouchableOpacity
          style={{
            backgroundColor: color.primaryGreen,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: color.primaryLight,
              fontSize: 16,
              fontFamily: font.SansMedium,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {type === 'secondary' ? (
        <TouchableOpacity
          style={{
            backgroundColor: color.white,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: color.primaryDarkGray,
              fontSize: 16,
              fontFamily: font.SansMedium,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {type === 'outline' ? (
        <TouchableOpacity
          style={{
            backgroundColor: color.white,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: color.primaryBlue
          }}>
          <Text
            style={{
              color: color.primaryBlue,
              fontSize: 16,
              fontFamily: font.SansRegular,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({});
