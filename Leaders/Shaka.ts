import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Zulu from '../Zulu';

export class Shaka extends Leader {
  static civilization(): typeof Civilization {
    return Zulu;
  }

  name(): string {
    return 'Shaka';
  }
}

export default Shaka;
