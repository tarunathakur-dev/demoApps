import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import {
  Container,
  HeaderContainer,
  HeaderText,
  ItemContainer,
  Thumbnail,
  TitleText,
  ImageContainer
} from './dashboard.style';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { fetchData } from '../../redux/movieReducer';
import { setUser } from '../../redux/userProfile';
import { SCREEN_NAMES } from '../../route/rootStack';
import Button from '../../generic/buttonField';

interface Props {
  navigation: any;
}

interface ArticleItemType {
  item: {
    title: string;
    poster_path: string;
    id: number;
  };
  index: number;
}

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: any) => state.movies);
  useEffect(() => {
    console.log("DATA::", data);
    dispatch(fetchData(1));
  }, []);

  const logoutUser = () => {
    dispatch(setUser({ email: '', password: '' }));
    navigation.reset({
      index: 0,
      routes: [{ name: SCREEN_NAMES.LOGIN }],
    });
  };

  const loadMoreData = () => {
    if (data.page < data.total_pages) {
      dispatch(fetchData(data.page + 1, data.results));
      return;
    }
  };


  const renderListItem = ({ item }: ArticleItemType) => {
    return (
      <ItemContainer>
        <Thumbnail source={{ uri: `https://image.tmdb.org/t/p/w500` }} />
        <TitleText numberOfLines={1}>{item.title}</TitleText>
      </ItemContainer>
    );
  };

  const logout = () => {
    Alert.alert(
      t('logout'),
      t('areYouSure'),
      [
        { text: t('no'), style: 'cancel' },
        {
          text: t('yes'),
          onPress: logoutUser,
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <SafeAreaView>
      <HeaderContainer>
        <HeaderText>{t('listOfMovies')}</HeaderText>
        <TouchableOpacity onPress={logout}>
          <ImageContainer source={require('../../assests/icons/logout.png')} />
        </TouchableOpacity>
      </HeaderContainer>
      <Container>
        <FlatList
          keyExtractor={(item, index) => `${item.id}-${data.page}-${index}`}
          testID="list-ofmovies"
          numColumns={2}
          keyboardShouldPersistTaps={'always'}
          data={data.results}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreData}
          renderItem={renderListItem}
        />
      </Container>
    </SafeAreaView>
  );
};

export default DashboardScreen;
