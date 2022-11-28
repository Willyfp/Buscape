import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { Carousel, Image } from 'react-native-ui-lib';

type Props = {
  images: { uri: string }[];
};

const ListImages = ({ images }: Props) => {
  return (
    <Carousel showCounter containerStyle={{ width: '100%', margin: 40 }}>
      {!isEmpty(images) ? (
        images.map(item => (
          <Image
            key={item.uri}
            style={{ width: '100%', height: 250 }}
            source={item}
          />
        ))
      ) : (
        <Image
          style={{ width: '100%', height: 250 }}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.hV6MoBaE8NYeMCugmhd7_QHaEo?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          }}
        />
      )}
    </Carousel>
  );
};

export default ListImages;
