import React from 'react';
import { Appbar, Avatar, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ViewRowBetween } from '../../../../styles';
import { View } from 'react-native-ui-lib';

const AboutUs = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <Appbar.Header
        mode="center-aligned"
        style={{ backgroundColor: 'transparent' }}
      >
        <Appbar.BackAction onPress={() => navigate('Perfil')} />
        <Appbar.Content title="Sobre nós" />
      </Appbar.Header>

      <ViewRowBetween style={{ padding: 16 }}>
        <View style={{ alignItems: 'center' }}>
          <Avatar.Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/65930566?v=4',
            }}
            size={75}
          />
          <Text style={{ fontWeight: 'bold' }}>Cristian F. Cavalheiro</Text>
          <Text>QA</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Avatar.Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/54161727?v=4',
            }}
            size={75}
          />
          <Text style={{ fontWeight: 'bold' }}>Willy F. Pereira</Text>
          <Text>Dev</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Avatar.Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/84148474?v=4',
            }}
            size={75}
          />
          <Text style={{ fontWeight: 'bold' }}>Pedro A. da Costa</Text>
          <Text>Dev</Text>
        </View>
      </ViewRowBetween>

      <View style={{ padding: 24 }}>
        <Text style={{ marginTop: 16, fontSize: 20, fontWeight: 'bold' }}>
          Resumo
        </Text>
        <Text style={{ textAlign: 'justify', fontSize: 14 }}>
          A sociedade Buscapê teve início em um projeto da faculdade de
          Engenharia de Software a partir da análise do mercado imobiliário e da
          necessidade dos estudantes das faculdades locais de acharem um
          apartamento para dividir aluguel. Em parceria com as imobiliárias da
          região Oeste do Paraná o app Buscapê segue a passos firmes buscando
          melhorar a cada dia mais a experiência e a satisfação dos usuários na
          busca pela locação de imóveis.
        </Text>

        <Text style={{ marginTop: 16, fontSize: 20, fontWeight: 'bold' }}>
          Missão
        </Text>
        <Text style={{ textAlign: 'justify', fontSize: 14 }}>
          Garantir os melhores negócios para os usuários da plataforma,
          facilitando os processos para o Locador e Locatário.
        </Text>

        <Text style={{ marginTop: 16, fontSize: 20, fontWeight: 'bold' }}>
          Visão
        </Text>
        <Text style={{ textAlign: 'justify', fontSize: 14 }}>
          Tornar-se líder em excelência na intermediação de serviços
          imobiliários.
        </Text>

        <Text style={{ marginTop: 16, fontSize: 20, fontWeight: 'bold' }}>
          Valores
        </Text>
        <Text style={{ textAlign: 'justify', fontSize: 14 }}>
          Compromisso com os usuários. Ética e transparência nas relações.
        </Text>
      </View>

      <Divider />
    </>
  );
};

export default AboutUs;
