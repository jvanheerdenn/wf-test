import { UIType } from '../menu-config.model';

export interface Milk {
  title: string;
  type: UIType;
  details: [MILK_OPTIONS[]] | [MILK_FOAM[]] | [MILK_TEMPERATURE[]];
}

export enum MILK_OPTIONS {
  HEAVY_CREAM = 'Heavy Cream',
  VANILLA_SWEET_CREAM = 'Vanilla Sweet Cream',
  NON_FAT = 'Nonfat Milk',
  TWO_PERCENTAGE_MILK = '2% Milk',
  WHOLE_MILK = 'Whole Milk',
  BREVE = 'Breve (Half & Half)',
  ALMOND = 'Almond',
  COCONUT = 'Coconut',
  OATMILK = 'Oatmilk',
  SOY = 'Soy'
}

export enum MILK_FOAM {
  EXTRA = 'Extra Milk Foam',
  LIGHT = 'Light Milk Foam',
  NO_MILK = 'No Milk Foam',
  MILK = 'Milk Foam'
}

export enum MILK_TEMPERATURE {
  WARM = 'Warm',
  STEAMED_HOT = 'Steamed Hot',
  EXTRA_HOT = 'Extra Hot'
}
