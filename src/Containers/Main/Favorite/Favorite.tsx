/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList} from 'react-native';
import {FavoriteProps} from '../../../Navigation/MainStackParams';
import styles from '../Home/Style';
import {connect} from 'react-redux';
import {
  favoriteClick,
  getUsers,
  unFavoriteClick,
} from '../../../redux/actions/UserActions';
import UserItem from '../Home/UserItem';
import {Result} from '../../../data/UserResponse';

const Favorite = ({navigation, route, ...props}: FavoriteProps) => {
  const [items, setItems] = useState([]);
  const _renderItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
    separators: any;
  }): JSX.Element | null => {
    if (!item) {
      return null;
    }
    return (
      <UserItem
        item={item}
        itemClick={(item: Result) => {
          navigation.navigate('Details', {
            user: item,
          });
        }}
        favoriteClick={(item: Result) => {
          props.favoriteClick(item);
        }}
        unFavoriteClick={(item: Result) => {
          props.unFavoriteClick(item);
        }}
      />
    );
  };

  useEffect(() => {
    if (props.users.users.length !== 0) {
      const users = props.users.users;
      const filteredUsers = users.filter(val => val.favorite);
      setItems(filteredUsers);
    }
  }, [props.users]);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flex}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  favoriteClick: user => dispatch(favoriteClick(user)),
  unFavoriteClick: user => dispatch(unFavoriteClick(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
