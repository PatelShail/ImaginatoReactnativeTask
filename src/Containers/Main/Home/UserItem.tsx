import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Result} from '../../../data/UserResponse';
import BaseStyles from '../../../Theme/BaseStyles';
import Images from '../../../Theme/Images';
import {normalize} from '../../../Utils/Utility';
import styles from './Style';

const UserItem = ({
  item,
  itemClick,
  favoriteClick,
  unFavoriteClick,
}: {
  item: Result;
  itemClick: (item: Result) => void;
  favoriteClick: (item: Result) => void;
  unFavoriteClick: (item: Result) => void;
}) => {
  return (
    <Pressable
      onPress={() => {
        itemClick(item);
      }}>
      <View>
        <View style={{...BaseStyles.fillRow, padding: normalize(8)}}>
          <FastImage
            style={styles.profileImageStyle}
            source={{
              uri: item.picture.thumbnail,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.nameContainerStyle}>
            <Text
              style={
                styles.nameStyle
              }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
            <Text style={styles.emailStyle}>{`${item.email}`}</Text>
            <View style={styles.iconViewStyle}>
              {item.favorite ? (
                <Pressable
                  onPress={() => {
                    unFavoriteClick(item);
                  }}>
                  <Image
                    source={Images.FavoriteSelected}
                    style={styles.iconStyle}
                  />
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    favoriteClick(item);
                  }}>
                  <Image source={Images.Favorite} style={styles.iconStyle} />
                </Pressable>
              )}
            </View>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </Pressable>
  );
};

export default UserItem;
