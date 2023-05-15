import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {font} from '../../styles/fonts/fonts';
import {ILKtp, ILSuccessRegis} from '../../assets/illustrations';
import Button from '../../components/button/button';
import {color} from '../../styles/color/color';
import Header from '../../components/header/header';
import {ScanImage} from '../../assets/dummy';
import Gap from '../../components/gap/gap';
import Input from '../../components/input/input';
import {ICDropdown} from '../../assets/icons';
import {Calendar} from 'react-native-calendars';

const gender = [
  {
    gender: 'Laki-Laki',
  },
  {
    gender: 'Perempuan',
  },
];

const religion = [
  {
    religion: 'Islam',
  },
  {
    religion: 'Protestan',
  },
  {
    religion: 'Katolik',
  },
  {
    religion: 'Hindu',
  },
  {
    religion: 'Buddha',
  },
  {
    religion: 'Khonghucu',
  },
];

const status = [
  {
    status: 'Menikah',
  },
  {
    status: 'Bujang',
  },
  {
    status: 'Cerai',
  },
  {
    status: 'Janda',
  },
  {
    status: 'Duda',
  },
];

const job = [
  {
    job: 'Wirausaha',
  },
  {
    job: 'Pedagang Kaki Lima',
  },
  {
    job: 'Pegawai',
  },
  {
    job: 'Pengusaha',
  },
  {
    job: 'Wiraswasta',
  },
];

const nationality = [
  {
    nationality: 'WNI',
  },
  {
    nationality: 'WNA',
  },
];

const EditData = () => {
  const [clickCalender, setClickCalender] = useState(false);

  const [clickDropdownGender, setClickDropdownGender] = useState(false);
  const [dataGender, setDataGender] = useState(gender);
  const [selectedDataGender, setSelectedDataGender] = useState('Jenis Kelamin');

  const [clickDropdownReligion, setClickDropdownReligion] = useState(false);
  const [dataReligion, setDataReligion] = useState(religion);
  const [selectedDataReligion, setSelectedDataReligion] = useState('Agama');

  const [clickDropdownStatus, setClickDropdownStatus] = useState(false);
  const [dataStatus, setDataStatus] = useState(status);
  const [selectedDataStatus, setSelectedDataStatus] = useState('Status');

  const [clickDropdownJob, setClickDropdownJob] = useState(false);
  const [dataJob, setDataJob] = useState(job);
  const [selectedDataJob, setSelectedDataJob] = useState('Pekerjaan');

  const [clickDropdownNationality, setClickDropdownNationality] =
    useState(false);
  const [dataNationality, setDataNationality] = useState(nationality);
  const [selectedDataNationality, setSelectedDataNationality] =
    useState('kewarganegaraan');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type="profile" title="Edit Data" icon />
        <View style={{padding: 24}}>
          <Input label="NIK" value="3519738437827434" type="default" />
          <Gap height={16} />
          <Input label="Nama Lengkap" value="John Doe" type="default" />
          <Gap height={16} />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Input label="Tempat/Tanggal Lahir" value="London" type="default" />
            <Gap width={15} />
            <View style={{flex: 1}}>
              <Input type="calender" label="" value="06-09-1989" onPress={() => {
                setClickCalender(!clickCalender)
              }} />
            </View>
          </View>
          <>
            {clickCalender ? (
              <Calendar
                enableSwipeMonths={true}
                onDayPress={day => {
                  console.log('selected day', day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                  console.log('selected day', day);
                }}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                  console.log('month changed', month);
                }}
                theme={{
                  textSectionTitleDisabledColor: '#d9e1e8',
                  arrowColor: color.primaryBlueDark,
                  todayBackgroundColor: color.primaryBlue,
                  todayTextColor: color.white,
                  selectedDayBackgroundColor: color.primaryBlue,
                }}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Hide month navigation arrows. Default = false
                hideArrows={false}
              />
            ) : null}
          </>
          <Gap height={16} />
          <>
            <Text
              style={{fontFamily: font.LatoRegular, color: color.primaryDark}}>
              Jenis Kelamin
            </Text>
            <TouchableOpacity
              onPress={() => setClickDropdownGender(!clickDropdownGender)}
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
                value={selectedDataGender}
                style={{flex: 1, color: color.primaryBlueDark}}
              />
              <Pressable style={{paddingRight: 12}}>
                <ICDropdown />
              </Pressable>
            </TouchableOpacity>
            {clickDropdownGender ? (
              <View
                style={{
                  padding: 10,
                  borderWidth: 0.2,
                  borderColor: '#9E9E9E',
                  backgroundColor: color.primaryLight,
                  borderRadius: 8,
                  marginTop: 10,
                }}>
                {dataGender.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.gender}
                      style={{paddingVertical: 4}}
                      onPress={() => {
                        setSelectedDataGender(item.gender);
                        setClickDropdownGender(false);
                      }}>
                      <Text>{item.gender}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </>
          <Gap height={16} />
          <Input label="Alamat" value="Jl Martadinata 10" type="default" />
          <Gap height={16} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Input label="RT" value="009" type="default" />
            <Gap width={54} />
            <Input label="RW" value="006" type="default" />
          </View>
          <Gap height={16} />
          <Input label="Kelurahan/Desa" value="Bantar Gebang" type="default" />
          <Gap height={16} />
          <Input label="Kecamatan" value="Sungai Raya" type="default" />
          <Gap height={16} />
          <>
            <Text
              style={{fontFamily: font.LatoRegular, color: color.primaryDark}}>
              Agama
            </Text>
            <TouchableOpacity
              onPress={() => setClickDropdownReligion(!clickDropdownReligion)}
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
                value={selectedDataReligion}
                style={{flex: 1, color: color.primaryBlueDark}}
              />
              <Pressable style={{paddingRight: 12}}>
                <ICDropdown />
              </Pressable>
            </TouchableOpacity>
            {clickDropdownReligion ? (
              <View
                style={{
                  padding: 10,
                  borderWidth: 0.2,
                  borderColor: '#9E9E9E',
                  backgroundColor: color.primaryLight,
                  borderRadius: 8,
                  marginTop: 10,
                }}>
                {dataReligion.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.religion}
                      style={{paddingVertical: 4}}
                      onPress={() => {
                        setSelectedDataReligion(item.religion);
                        setClickDropdownReligion(false);
                      }}>
                      <Text>{item.religion}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </>
          <Gap height={16} />
          <>
            <Text
              style={{fontFamily: font.LatoRegular, color: color.primaryDark}}>
              Status
            </Text>
            <TouchableOpacity
              onPress={() => setClickDropdownStatus(!clickDropdownStatus)}
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
                value={selectedDataStatus}
                style={{flex: 1, color: color.primaryBlueDark}}
              />
              <Pressable style={{paddingRight: 12}}>
                <ICDropdown />
              </Pressable>
            </TouchableOpacity>
            {clickDropdownStatus ? (
              <View
                style={{
                  padding: 10,
                  borderWidth: 0.2,
                  borderColor: '#9E9E9E',
                  backgroundColor: color.primaryLight,
                  borderRadius: 8,
                  marginTop: 10,
                }}>
                {dataStatus.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.status}
                      style={{paddingVertical: 4}}
                      onPress={() => {
                        setSelectedDataStatus(item.status);
                        setClickDropdownStatus(false);
                      }}>
                      <Text>{item.status}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </>
          <Gap height={16} />
          <>
            <Text
              style={{fontFamily: font.LatoRegular, color: color.primaryDark}}>
              Pekerjaan
            </Text>
            <TouchableOpacity
              onPress={() => setClickDropdownJob(!clickDropdownJob)}
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
                value={selectedDataJob}
                style={{flex: 1, color: color.primaryBlueDark}}
              />
              <Pressable style={{paddingRight: 12}}>
                <ICDropdown />
              </Pressable>
            </TouchableOpacity>
            {clickDropdownJob ? (
              <View
                style={{
                  padding: 10,
                  borderWidth: 0.2,
                  borderColor: '#9E9E9E',
                  backgroundColor: color.primaryLight,
                  borderRadius: 8,
                  marginTop: 10,
                }}>
                {dataJob.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.job}
                      style={{paddingVertical: 4}}
                      onPress={() => {
                        setSelectedDataJob(item.job);
                        setClickDropdownJob(false);
                      }}>
                      <Text>{item.job}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </>
          <Gap height={16} />
          <>
            <Text
              style={{fontFamily: font.LatoRegular, color: color.primaryDark}}>
              kewarganegaraan
            </Text>
            <TouchableOpacity
              onPress={() =>
                setClickDropdownNationality(!clickDropdownNationality)
              }
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
                value={selectedDataNationality}
                style={{flex: 1, color: color.primaryBlueDark}}
              />
              <Pressable style={{paddingRight: 12}}>
                <ICDropdown />
              </Pressable>
            </TouchableOpacity>
            {clickDropdownNationality ? (
              <View
                style={{
                  padding: 10,
                  borderWidth: 0.2,
                  borderColor: '#9E9E9E',
                  backgroundColor: color.primaryLight,
                  borderRadius: 8,
                  marginTop: 10,
                }}>
                {dataNationality.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.nationality}
                      style={{paddingVertical: 4}}
                      onPress={() => {
                        setSelectedDataNationality(item.nationality);
                        setClickDropdownNationality(false);
                      }}>
                      <Text>{item.nationality}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </>
          <Gap height={74} />
          <Button type="primary" label="Save Data" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditData;

const styles = StyleSheet.create({});
