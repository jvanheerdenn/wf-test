import { UIType } from '../menu-config.model';

export interface AddIns {
  title: string;
  type: UIType;
  details:
    | [LINE_THE_CUP[]]
    | [ROOM[]]
    | [
        MILK_CREAMER[],
        ALMONDMILK[],
        COCONUTMILK[],
        CREAM[],
        HEAVY_CREAM[],
        NON_FAT_MILK[],
        OATMILK[],
        SOYMILK[],
        WHOLE_MILK[],
        VANILLA_SWEET_CREAM[]
      ]
    | [WATER[]]
    | [LIQUID_SWEETNER[]]
    | [SWEETNER_PACKETS[]]
    | [CHOCOLATE_MALT_POWDER[]];
}

export enum LINE_THE_CUP {
  CARAMEL = 'Line the Cup with Caramel Sauce',
  MOCHA = 'Line the Cup with Mocha Sauce'
}

export enum ROOM {
  EXTRA = 'Extra Room',
  LIGHT = 'Light Room',
  NO_ROOM = 'No Room',
  ROOM = 'Room'
}

export enum MILK_CREAMER {
  EXTRA = 'Extra Splash of 2% Milk',
  LIGHT = 'Light Splash of 2% Milk',
  NO_SPLASH = 'No Splash of 2% Milk',
  SPLASH = 'Splash of 2% Milk'
}

export enum ALMONDMILK {
  EXTRA = 'Extra Splash of Almondmilk',
  LIGHT = 'Light Splash of Almondmilk',
  SPLASH = 'Splash of Almondmilk'
}

export enum COCONUTMILK {
  EXTRA = 'Extra Splash of Coconutmilk',
  LIGHT = 'Light Splash of Coconutmilk',
  NO_SPLASH = 'No Splash of Coconutmilk',
  SPLASH = 'Splash of Coconutmilk'
}

export enum CREAM {
  EXTRA = 'Extra Splash of Cream (Half & Half)',
  LIGHT = 'Light Splash of Cream (Half & Half)',
  SPLASH = 'Splash of Cream (Half & Half)'
}

export enum HEAVY_CREAM {
  EXTRA = 'Extra Splash of Heavy Cream',
  LIGHT = 'Light Splash of Heavy Cream',
  SPLASH = 'Splash of Heavy Cream'
}

export enum NON_FAT_MILK {
  EXTRA = 'Extra Splash of Nonfat Milk',
  LIGHT = 'Light Splash of Nonfat Milk',
  SPLASH = 'Splash of Nonfat Milk'
}

export enum OATMILK {
  EXTRA = 'Extra Splash of Oatmilk',
  LIGHT = 'Light Splash of Oatmilk',
  NO_SPLASH = 'No Splash of Oatmilk',
  SPLASH = 'Splash of Oatmilk',
  SUBSTITUTE = 'Substitute Splash of Oatmilk'
}

export enum SOYMILK {
  EXTRA = 'Extra Splash of Soymilk',
  LIGHT = 'Light Splash of Soymilk',
  SPLASH = 'Splash of Soymilk'
}

export enum WHOLE_MILK {
  EXTRA = 'Extra Splash of Whole Milk',
  LIGHT = 'Light Splash of Whole Milk',
  SPLASH = 'Splash of Whole Milk'
}

export enum VANILLA_SWEET_CREAM {
  EXTRA = 'Extra Splash of Vanilla Sweet Cream',
  LIGHT = 'Light Splash of Vanilla Sweet Cream',
  NO_SPLASH = 'No Splash of Vanilla Sweet Cream',
  SPLASH = 'Splash of Vanilla Sweet Cream'
}

export interface Water {
  title: string;
}
export enum WATER {
  EXTRA = 'Extra Water',
  LIGHT = 'Light Water',
  NO_SPLASH = 'No Water',
  WATER = 'Water'
}

export enum LIQUID_SWEETNER {
  CLASSIC_SYRUP = 'Classic Syrup',
  LIQUID_CANE_SUGAR = 'Liquid Cane Sugar',
  HONEY_BLEND = 'Honey Blend'
}

export enum SWEETNER_PACKETS {
  SUGAR = 'Sugar',
  SUGAR_RAW = 'Sugar in the Raw',
  HONEY = 'Honey',
  SPLENDA = 'Splenda',
  STEVIA_RAW = 'Stevia in the Raw'
}

export enum CHOCOLATE_MALT_POWDER {
  EXTRA = 'Extra Chocolate Malt Powder',
  LIGHT = 'Light Chocolate Malt Powder',
  NO_CHOCOLATE = 'No Chocolate Malt Powder',
  CHOCOLATE = 'Chocolate Malt Powder',
  SUBSTITUTE = 'Substitute Chocolate Malt Powder'
}
