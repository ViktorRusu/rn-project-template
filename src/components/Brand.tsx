import React from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

const Brand = () => {
  const {t} = useTranslation();

  return (
    <View>
      <Text>{t('welcome')}</Text>
    </View>
  );
};

export default Brand;
