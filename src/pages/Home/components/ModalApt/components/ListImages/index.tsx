import React from 'react';
import { Carousel, Image } from 'react-native-ui-lib';

type Props = {
  images: { uri: string }[];
};

const ListImages = ({ images }: Props) => {
  return (
    <Carousel showCounter containerStyle={{ width: '100%', margin: 40 }}>
      {images.map(item => (
        <Image
          key={item.uri}
          style={{ width: '100%', height: 250 }}
          source={item}
        />
      ))}
    </Carousel>
  );
};

export default ListImages;
