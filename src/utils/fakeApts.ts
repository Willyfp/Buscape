import { User } from '../store/reducers/auth/types';

export type APType = {
  id: string;
  description: string;
  address: string;
  likes?: User[];
  price: {
    aluguel: number;
    condominio?: number;
    IPTU?: number;
    total: number;
  };
  comodities: string[];
  images: {
    uri: string;
  }[];
  coords: {
    latitude: number;
    longitude: number;
  };
};
