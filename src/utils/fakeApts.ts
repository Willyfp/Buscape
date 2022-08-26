export type APType = {
  id: number;
  description: string;
  address: string;
  price: {
    aluguel: number;
    condominio?: number;
    IPTU?: number;
    total: number;
  };
  comodities: {
    name: string;
    quantity: number;
    icon: string;
  }[];
  images: {
    uri: string;
  }[];
  coords: {
    latitude: number;
    longitude: number;
  };
};

export const apartamentos: APType[] = [
  {
    id: 6965,
    description: 'Apartamento novo para locação no Loteamento Belmont',
    address: 'Belmont - Cascavel/PR',
    price: {
      aluguel: 650,
      condominio: 250,
      total: 900,
    },
    comodities: [
      {
        name: 'quartos',
        quantity: 2,
        icon: 'bed',
      },
      {
        name: 'Banheiro',
        quantity: 1,
        icon: 'shower',
      },
      {
        name: 'Vaga',
        quantity: 1,
        icon: 'car',
      },
    ],
    images: [
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6965/20220412-102921.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6965/20220412-103522.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6965/20220412-103528.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6965/20220412-103537.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6965/202.jpg',
      },
    ],
    coords: {
      latitude: -24.9318285,
      longitude: -53.40598725,
    },
  },
  {
    id: 1539,
    description: 'kit para locação no Residencial Universitário',
    address: 'Fag - Cascavel/PR',
    price: {
      aluguel: 700,
      condominio: 220,
      IPTU: 60,
      total: 980,
    },
    comodities: [
      {
        name: 'quartos',
        quantity: 1,
        icon: 'bed',
      },
      {
        name: 'Banheiro',
        quantity: 1,
        icon: 'shower',
      },
      {
        name: 'Vaga',
        quantity: 1,
        icon: 'car',
      },
    ],
    images: [
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/1539/20201230-164043.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Condominios/2/fotos_14680512400.jpg',
      },
    ],
    coords: {
      latitude: -24.95125119,
      longitude: -53.5057141,
    },
  },
  {
    id: 7245,
    description: 'Apartamento para aluguel, 3 quartos, 1 vaga',
    address: 'Universitario - Cascavel/PR',
    price: {
      aluguel: 1100,
      condominio: 260,
      total: 1360,
    },
    comodities: [
      {
        name: 'quartos',
        quantity: 3,
        icon: 'bed',
      },
      {
        name: 'Banheiro',
        quantity: 1,
        icon: 'shower',
      },
      {
        name: 'Vaga',
        quantity: 1,
        icon: 'car',
      },
    ],
    images: [
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7245/1.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7245/whatsapp-image-2022-06-10-at-143730.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7245/whatsapp-image-2022-06-10-at-143729.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7245/whatsapp-image-2022-06-10-at-143731.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7245/whatsapp-image-2022-06-10-at-143731-1.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7245/whatsapp-image-2022-06-10-at-143730-2.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7245/whatsapp-image-2022-06-10-at-143730-1.jpeg',
      },
    ],
    coords: {
      latitude: -24.9800825,
      longitude: -53.447096,
    },
  },
  {
    id: 7147,
    description: 'Apartamento 2 quartos para locação no térreo, semi mobiliado',
    address: 'Cancelli - Cascavel/PR',
    price: {
      aluguel: 1100,
      total: 1100,
    },
    comodities: [
      {
        name: 'quartos',
        quantity: 2,
        icon: 'bed',
      },
      {
        name: 'Banheiro',
        quantity: 1,
        icon: 'shower',
      },
      {
        name: 'Vaga',
        quantity: 1,
        icon: 'car',
      },
    ],
    images: [
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7147/facahada.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7147/whatsapp-image-2022-05-20-at-114003.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7147/whatsapp-image-2022-05-20-at-114004-1.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7147/whatsapp-image-2022-05-20-at-114008-2.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7147/whatsapp-image-2022-05-20-at-114011.jpeg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/7147/whatsapp-image-2022-05-20-at-114010.jpeg',
      },
    ],
    coords: {
      latitude: -24.9364882,
      longitude: -53.4700494,
    },
  },
  {
    id: 6586,
    description: 'Apartamento para locação no Ed. Contemporaneau',
    address: 'Centro - Cascavel/PR',
    price: {
      aluguel: 4500,
      condominio: 700,
      IPTU: 230,
      total: 5430,
    },
    comodities: [
      {
        name: 'quartos',
        quantity: 3,
        icon: 'bed',
      },
      {
        name: 'suíte',
        quantity: 1,
        icon: 'bed',
      },
      {
        name: 'Banheiros',
        quantity: 2,
        icon: 'shower',
      },
      {
        name: 'Vagas',
        quantity: 2,
        icon: 'car',
      },
    ],
    images: [
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-154618.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-151941.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-151752.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-151810.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-151948.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-151738.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-151531.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-151441.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-152548.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-152328.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-152359.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-152539.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-152301.jpg',
      },
      {
        uri: 'https://s3.imoview.com.br/lokatell/Imoveis/6586/20220118-152453.jpg',
      },
    ],
    coords: {
      latitude: -24.9586928,
      longitude: -53.4590945,
    },
  },
];
