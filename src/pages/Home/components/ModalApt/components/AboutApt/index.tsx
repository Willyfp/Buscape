import React from 'react';
import { View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider, ViewComodities, ViewPrice } from './styles';
import { MaskService } from 'react-native-masked-text';
import { APType } from '../../../../../../utils/fakeApts';
import { Text } from 'react-native-paper';
import { themeStyledComponents } from '../../../../../../../App';

type Props = {
  apartamento: APType;
};

const AboutApt = ({ apartamento }: Props) => {
  return (
    <View style={{ width: '100%', alignItems: 'flex-start' }}>
      <Text
        style={{
          color: themeStyledComponents.colors.text.primary,
          fontWeight: 'bold',
          marginTop: 10,
        }}
        variant="headlineSmall"
      >
        {apartamento.description}
      </Text>
      <Text
        style={{
          color: themeStyledComponents.colors.text.primary,
        }}
        variant="titleMedium"
      >
        {apartamento.address}
      </Text>

      <ViewComodities>
        {apartamento.comodities.map(item => (
          <View style={{ alignItems: 'center' }} key={item.name}>
            <FontAwesome5Icon
              name={item.icon}
              size={20}
              color={themeStyledComponents.colors.primary}
            />
            <Text
              style={{
                color: themeStyledComponents.colors.text.primary,
              }}
            >
              {item.quantity}
            </Text>
            <Text
              style={{
                color: themeStyledComponents.colors.text.primary,
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </ViewComodities>

      <ViewPrice>
        <Text
          style={{
            color: themeStyledComponents.colors.text.primary,
          }}
        >
          Aluguel
        </Text>
        <Text
          style={{
            color: themeStyledComponents.colors.text.primary,
          }}
        >
          {MaskService.toMask('money', apartamento.price.aluguel, {
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: '',
          })}
        </Text>
      </ViewPrice>

      {Object.entries(apartamento.price).map(([name, value]) => {
        if (name !== 'aluguel' && name !== 'total')
          return (
            <ViewPrice key={name}>
              <Text
                style={{
                  color: themeStyledComponents.colors.text.primary,
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  color: themeStyledComponents.colors.text.primary,
                }}
              >
                {MaskService.toMask('money', value, {
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: 'R$',
                  suffixUnit: '',
                })}
              </Text>
            </ViewPrice>
          );
      })}

      <Divider />

      <ViewPrice>
        <Text
          style={{
            color: themeStyledComponents.colors.text.primary,
          }}
        >
          Total
        </Text>
        <Text
          style={{
            color: themeStyledComponents.colors.text.primary,
          }}
        >
          {MaskService.toMask('money', apartamento.price.total, {
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: '',
          })}
        </Text>
      </ViewPrice>
    </View>
  );
};

export default AboutApt;
