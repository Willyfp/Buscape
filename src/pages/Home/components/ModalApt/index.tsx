import React from 'react';
import { Linking, ModalProps, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { LoaderScreen, Modal } from 'react-native-ui-lib';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { connect, ConnectedProps } from 'react-redux';
import { themeStyledComponents } from '../../../../../App';
import { RootState } from '../../../../store/reducers';
import { LikeAppartmentCreators } from '../../../../store/reducers/appartments';
import { StyledButton } from '../../../../styles';
import { APType } from '../../../../utils/fakeApts';
import { openNavigation } from '../../../../utils/location';
import { ViewRow } from '../../../Profile/components/PersonalInfo/styles';
import AboutApt from './components/AboutApt';
import ListImages from './components/ListImages';
import { CenteredView, ViewFlex, ViewModal, ViewTopModal } from './styles';
import { isEmpty } from 'lodash';
import { LikesList } from './components/LikesList';

const mapStateToProps = ({ auth, appartments }: RootState) => ({
  user: auth.getIn(['user']),
  apart: appartments.getIn(['selected']),
});

const mapDispatchToProps = {
  likeAppartment: LikeAppartmentCreators.likeAppartmentRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ModalApt = ({
  onRequestClose,
  user,
  visible,
  apart,
  likeAppartment,
}: ModalProps & { apart: APType } & PropsFromRedux) => {
  const [modalLikes, setModalLikes] = React.useState({
    visible: false,
    likes: [],
  });

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
    >
      <CenteredView>
        <ViewModal>
          <ViewTopModal>
            <ViewRow>
              <TouchableOpacity onPress={() => likeAppartment(apart.id)}>
                <FontAwesome5Icon
                  name="heart"
                  size={30}
                  solid={!!user.favorites?.find(id => id === apart.id)}
                  color={themeStyledComponents.colors.error}
                />
              </TouchableOpacity>

              <Text
                style={{
                  color: themeStyledComponents.colors.primary,
                  marginLeft: 8,
                  fontSize: 18,
                }}
                onPress={() =>
                  apart?.likes?.length > 0 &&
                  setModalLikes({ visible: true, likes: apart.likes })
                }
              >
                {apart?.likes?.length > 0
                  ? apart.likes.length > 2
                    ? `${apart.likes[0].name.split(' ')[0]}, ${
                        apart.likes[1].name.split(' ')[0]
                      } +${apart.likes.length - 2}`
                    : apart.likes.length
                  : 0}
              </Text>
            </ViewRow>

            <TouchableOpacity onPress={onRequestClose}>
              <FontAwesome5Icon
                name="times"
                size={30}
                color={themeStyledComponents.colors.text.primary}
              />
            </TouchableOpacity>
          </ViewTopModal>
          {!isEmpty(apart) ? (
            <>
              <ListImages images={apart.images} />
              <AboutApt apartamento={apart} />
              <ViewFlex>
                <StyledButton
                  style={{ marginTop: 30 }}
                  mode="outlined"
                  icon="compass"
                  onPress={() =>
                    openNavigation(
                      apart.coords.latitude,
                      apart.coords.longitude,
                    )
                  }
                >
                  Ir agora
                </StyledButton>
                <StyledButton
                  mode="contained"
                  Z
                  icon="open-in-new"
                  onPress={() => Linking.openURL(apart.link)}
                >
                  Ir para o site
                </StyledButton>
              </ViewFlex>
            </>
          ) : (
            <LoaderScreen />
          )}
        </ViewModal>
      </CenteredView>

      <LikesList
        {...modalLikes}
        onRequestClose={() => setModalLikes({ visible: false, likes: [] })}
      />
    </Modal>
  );
};

export default connector(ModalApt);
