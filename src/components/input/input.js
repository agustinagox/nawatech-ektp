import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../styles/color/color';
import {font} from '../../styles/fonts/fonts';
import {ICCalender, ICDropdown} from '../../assets/icons';
import Gap from '../gap/gap';

const gender = [
  {
    gender: 'Laki-Laki',
  },
  {
    gender: 'Perempuan',
  },
];

const Input = ({label, placeholder, value, type, disable, onPress}) => {
  const [clickDropdown, setClickDropdown] = useState(false);
  const [data, setData] = useState(gender);
  const [selectedData, setSelectedData] = useState('Jenis Kelamin');

  return (
    <View>
      <Text style={{fontFamily: font.LatoRegular, color: color.primaryDark}}>
        {label}
      </Text>
      {type === 'calender' ? (
        <TouchableOpacity onPress={onPress}
          style={{
            paddingHorizontal: 10,
            borderWidth: 0.2,
            borderColor: '#9E9E9E',
            backgroundColor: color.primaryLight,
            borderRadius: 8,
            marginTop: 10,
            fontSize: 14,
            fontFamily: font.LatoRegular,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ICCalender />
          <Gap width={4} />
          <TextInput
            editable={false}
            selectTextOnFocus={false}
            value={value}
            placeholder={placeholder}
            style={{flex: 1, color: color.primaryBlueDark}}
          />
        </TouchableOpacity>
      ) : undefined}
      {type === 'dropdown' ? (
        <>
          <TouchableOpacity
            onPress={() => setClickDropdown(!clickDropdown)}
            style={{
              paddingHorizontal: 10,
              borderWidth: 0.2,
              borderColor: '#9E9E9E',
              backgroundColor: color.primaryLight,
              borderRadius: 8,
              marginTop: 10,
              fontSize: 14,
              fontFamily: font.LatoRegular,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              value={selectedData}
              placeholder={placeholder}
              style={{flex: 1, color: color.primaryBlueDark}}
            />
            <Pressable style={{paddingRight: 12}}>
              <ICDropdown />
            </Pressable>
          </TouchableOpacity>
          {clickDropdown ? (
            <View
              style={{
                padding: 10,
                borderWidth: 0.2,
                borderColor: '#9E9E9E',
                backgroundColor: color.primaryLight,
                borderRadius: 8,
                marginTop: 10,
              }}>
              {data.map(item => {
                return (
                  <TouchableOpacity
                    key={item.gender}
                    style={{paddingVertical: 4}}
                    onPress={() => {
                      setSelectedData(item.gender);
                      setClickDropdown(false);
                    }}>
                    <Text>{item.gender}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </>
      ) : undefined}
      {type === 'default' ? (
        <View
          style={{
            paddingHorizontal: 10,
            borderWidth: 0.2,
            borderColor: '#9E9E9E',
            backgroundColor: color.primaryLight,
            borderRadius: 8,
            marginTop: 10,
            fontSize: 14,
            fontFamily: font.LatoRegular,
          }}>
          {disable ? (
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              value={value}
              placeholder={placeholder}
              style={{flex: 1, color: color.primaryGrey}}
            />
          ) : (
            <TextInput
              value={value}
              placeholder={placeholder}
              style={{flex: 1, color: color.primaryBlueDark}}
            />
          )}
        </View>
      ) : undefined}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
