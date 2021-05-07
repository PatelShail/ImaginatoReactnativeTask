import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DetailsProps} from '../../../Navigation/MainStackParams';
import styles from './Style';

const Details = ({route, navigation}: DetailsProps) => {
  const user = route.params.user;
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.profileImageStyle}
        source={{
          uri: user.picture.thumbnail,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
      <Text>{`${user.email}`}</Text>
    </View>
  );
};

export default Details;
