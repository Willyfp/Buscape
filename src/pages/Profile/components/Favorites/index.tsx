import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { Appbar, Divider, List } from 'react-native-paper';
import { Image } from 'react-native-ui-lib';
import { connect, ConnectedProps } from 'react-redux';
import { useTheme } from 'styled-components';
import { RootState } from '../../../../store/reducers';
import { GetAppartmentsCreators } from '../../../../store/reducers/appartments';
import ModalApt from '../../../Home/components/ModalApt';

const mapStateToProps = ({ auth, appartments }: RootState) => ({
  user: auth.getIn(['user']),
  appartmentsList: appartments.getIn(['list']),
});

const mapDispatchToProps = {
  selectAppartment: GetAppartmentsCreators.selectAppartment,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Favorites = ({
  user,
  appartmentsList,
  selectAppartment,
}: PropsFromRedux) => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const [modalApt, setModalApt] = useState<boolean>(false);

  const appartmentsFavorites = appartmentsList.filter(apart =>
    user.favorites?.includes(apart.id),
  );

  return (
    <>
      <Appbar.Header
        mode="center-aligned"
        style={{ backgroundColor: 'transparent' }}
      >
        <Appbar.BackAction
          onPress={() => navigate('Perfil')}
          iconColor={colors.text.primary}
        />
        <Appbar.Content
          title="Apartamentos favoritos"
          titleStyle={{ color: colors.text.primary }}
        />
      </Appbar.Header>

      <List.Section style={{ paddingHorizontal: 16 }}>
        {appartmentsFavorites.map(apart => (
          <Fragment key={apart.id}>
            <List.Item
              onPress={() => {
                selectAppartment(apart as any);
                setModalApt(true);
              }}
              title={apart.address}
              description={apart.description}
              left={() => (
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri:
                      apart.images?.[0]?.uri ||
                      'https://th.bing.com/th/id/OIP.hV6MoBaE8NYeMCugmhd7_QHaEo?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  }}
                />
              )}
            />
            <Divider />
          </Fragment>
        ))}
      </List.Section>

      <ModalApt visible={modalApt} onRequestClose={() => setModalApt(false)} />
    </>
  );
};

export default connector(Favorites);
