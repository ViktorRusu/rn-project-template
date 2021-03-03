import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import Logo from '../assets/images/logo.svg';

const Brand = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Logo width={84} height={84} fill={'#39d9ff'} />
      <Text style={styles.textWelcome}>{t('welcome')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 8,
  },

  textWelcome: {
    marginTop: 16,
  },
});

export default Brand;
