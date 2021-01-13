import Zulu from './Zulu';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

([
  'uMgungundlovu',
  'Nobamba',
  'Bulawayo',
  'KwaDukuza',
  'Nongoma',
  'oNdini',
  'Nodwengu',
  'Ndondakusuka',
  'Babanango',
  'Khangela',
  'Kwahlomendlini',
  'Hlobane',
  'eThekwini',
  'Mlambongwenya',
  'Eziqwaqweni',
  'Isiphezi',
  'Masotsheni',
  'Mtunzini',
  'Nyakamubi',
  'Hlatikulu',
  'Mthonjaneni',
  'Empangeni',
  'Pongola',
  'Tungela',
  'Kwamashu',
  'Ingwavuma',
  'Hluhluwe',
  'Mtubatuba',
  'Mhlahlandlela',
  'Mthatha',
  'Maseru',
  'Lobamba',
  'Qunu',
] as string[]).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Zulu, i === 0))
);
