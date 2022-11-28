import { GeolocationResponse } from '@react-native-community/geolocation';
import React, { useEffect, useRef, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native-paper';
import { connect, ConnectedProps } from 'react-redux';
import { themeStyledComponents } from '../../../App';
import { RootState } from '../../store/reducers';
import { GetAppartmentsCreators } from '../../store/reducers/appartments';
import { GetLocationCreators } from '../../store/reducers/location';
import { API_MAPS_KEY, images } from '../../utils/constants';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from '../../utils/location';
import ModalApt from './components/ModalApt';
import { HouseIcon, StyledMap, stylesMap } from './styles';

type StateType = {
  onMapReady: boolean;
};

const mapDispatchToProps = {
  setLocation: GetLocationCreators.setLocation,
  getLocation: GetLocationCreators.getCurrentLocationRequest,
  selectAppartment: GetAppartmentsCreators.selectAppartment,
};

const mapStateToProps = ({ location, appartments }: RootState) => ({
  currentLocation: location.getIn(['location']),
  appartmentsList: appartments.getIn(['list']),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Home = ({
  setLocation,
  selectAppartment,
  currentLocation,
  getLocation,
  appartmentsList,
}: PropsFromRedux) => {
  const mapRef = useRef<MapView>(null);

  const [modalApt, setModalApt] = useState<boolean>(false);

  const [state, setState] = useState<StateType>({
    onMapReady: false,
  });

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {currentLocation.coords ? (
        <>
          <StyledMap
            toolbarEnabled={false}
            loadingEnabled={!state.onMapReady}
            onMapReady={() => setState({ onMapReady: true })}
            region={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            ref={mapRef}
          >
            <Marker coordinate={currentLocation?.coords}>
              <HouseIcon source={{ uri: images.houseIcon }} />
            </Marker>

            {appartmentsList.map(item => (
              <Marker
                coordinate={item.coords}
                key={item.address}
                onPress={() => {
                  selectAppartment(item as any);
                  setModalApt(true);
                }}
              />
            ))}
          </StyledMap>
          <GooglePlacesAutocomplete
            fetchDetails
            placeholder="Buscar localização"
            keepResultsAfterBlur
            enablePoweredByContainer={false}
            textInputProps={{
              autoCapitalize: 'none',
              autoCorrect: false,
              allowFontScaling: false,
              placeholderTextColor: themeStyledComponents.colors.primary,
            }}
            onPress={async (data, details = null) => {
              if (details) {
                const coordinates = {
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                };

                setLocation({
                  coords: {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                  },
                } as GeolocationResponse);
              }
            }}
            query={{
              key: API_MAPS_KEY,
              language: 'pt-br',
            }}
            styles={stylesMap()}
          />
        </>
      ) : (
        <ActivityIndicator />
      )}

      <ModalApt visible={modalApt} onRequestClose={() => setModalApt(false)} />
    </>
  );
};

export default connector(Home);
