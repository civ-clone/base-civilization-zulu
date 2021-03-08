import Zulu from './Zulu';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Zulu',
  nation: 'Zulus',
  colors: ['#FFFD1E', '#000'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Zulu, name, value))
);
