/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import {HomeProps} from '../../../Navigation/MainStackParams';
import styles from './Style';
import {connect} from 'react-redux';
import {
  favoriteClick,
  getUsers,
  unFavoriteClick,
} from '../../../redux/actions/UserActions';
import Colors from '../../../Theme/Colors';
import {normalize} from '../../../Utils/Utility';
import {Result} from '../../../data/UserResponse';
import UserItem from './UserItem';

const Home = ({navigation, route, ...props}: HomeProps) => {
  const [items, setItems] = useState<Array<Result>>();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const pageNumber = useRef(1);

  const _renderItem = ({
    item,
    index,
  }: {
    item: Result;
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
      pageNumber.current = pageNumber.current + 1;
      setItems(props.users.users);
      setLoading(false);
      setRefreshing(false);
    }
  }, [props.users]);

  useEffect(() => {
    setLoading(true);
    props.getUsers(pageNumber.current);
  }, []);

  const _onEndReached = (info: {distanceFromEnd: number}) => {
    if (!loading) {
      setLoading(true);
      props.getUsers(pageNumber.current);
    }
  };

  const _renderFooterItem = () => {
    return (
      pageNumber.current !== 1 &&
      loading && <ActivityIndicator size={normalize(48)} color={Colors.black} />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flex}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={_renderFooterItem}
          onEndReachedThreshold={0.5}
          onEndReached={_onEndReached}
          refreshing={refreshing}
          onRefresh={() => {
            pageNumber.current = 1;
            props.getUsers(pageNumber.current);
          }}
        />
      </View>
      {loading && pageNumber.current === 1 && (
        <ActivityIndicator
          size={normalize(48)}
          color={Colors.black}
          style={styles.progress}
        />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: (pageNumber: {pageNumber: number}) =>
    dispatch(getUsers(pageNumber)),
  favoriteClick: (user: Result) => dispatch(favoriteClick(user)),
  unFavoriteClick: (user: Result) => dispatch(unFavoriteClick(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
