import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {font} from '../../styles/fonts/fonts';
import {ILKtp, ILSuccessRegis} from '../../assets/illustrations';
import Button from '../../components/button/button';
import {color} from '../../styles/color/color';
import Header from '../../components/header/header';
import {ScanImage} from '../../assets/dummy';
import Gap from '../../components/gap/gap';
import Input from '../../components/input/input';

const ResultOcr = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type="profile" title="Verify ID Card" />
        <View style={{padding: 24}}>
          <Input label="NIK" value="3519738437827434" type="default" disable />
          <Gap height={16} />
          <Input label="Nama Lengkap" value="John Doe" type="default" disable />
          <Gap height={16} />
          <Input
            label="Tempat/Tanggal Lahir"
            value="London, 09 - 09 - 1980"
            type="default"
            disable
          />
          <Gap height={16} />
          <Input
            label="Jenis Kelamin"
            value="Laki-Laki"
            type="default"
            disable
          />
          <Gap height={16} />
          <Input
            label="Alamat"
            value="Jl Martadinata 10"
            type="default"
            disable
          />
          <Gap height={16} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Input label="RT" value="009" type="default" disable />
            <Gap width={54} />
            <Input label="RW" value="006" type="default" disable />
          </View>
          <Gap height={16} />
          <Input
            label="Kelurahan/Desa"
            value="Bantar Gebang"
            type="default"
            disable
          />
          <Gap height={16} />
          <Input label="Kecamatan" value="Sungai Raya" type="default" disable />
          <Gap height={16} />
          <Input label="Agama" value="Islam" type="default" disable />
          <Gap height={16} />
          <Input label="Status" value="Menikah" type="default" disable />
          <Gap height={16} />
          <Input
            label="Pekerjaan"
            value="Pegawai Swasta"
            type="default"
            disable
          />
          <Gap height={16} />
          <Input label="Kewarganegaraan" value="WNA" type="default" disable />
          <Gap height={16} />
        </View>
      </ScrollView>
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: color.white,
          padding: 24,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        }}>
        <Button type="primary" label="Submit" />
        <Gap height={16} />
        <Button type="outline" label="Change Data" />
      </View>
    </SafeAreaView>
  );
};

export default ResultOcr;

const styles = StyleSheet.create({});
