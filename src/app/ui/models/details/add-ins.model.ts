export interface AddIns {
  lineTheCup?: LINE_THE_CUP[];
  room?: ROOM[];
  creamer?: Creamer;
  water?: WATER[];
  liquidSweetner?: LIQUID_SWEETENER[];
  sweetnerPackets?: SWEETNER_PACKETS[];
  powders?: Powders;
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

export interface Creamer {
  milk?: MILK_CREAMER[];
  almondmilk?: ALMONDMILK[];
  coconutmilk?: COCONUTMILK[];
  cream?: CREAM[];
  heavyCream?: HEAVY_CREAM[];
  nonfatMilk?: NON_FAT_MILK[];
  oatMilk?: OATMILK[];
  soymilk?: SOYMILK[];
  wholeMilk?: WHOLE_MILK[];
  vanillaSweetCream?: VANILLA_SWEET_CREAM[];
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

export enum WATER {
  EXTRA = 'Extra Water',
  LIGHT = 'Light Water',
  NO_SPLASH = 'No Water',
  WATER = 'Water'
}

export enum LIQUID_SWEETENER {
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

export interface Powders {
  chocolate: CHOCOLATE_MALT_POWDER[];
  vanilla: number;
}

export enum CHOCOLATE_MALT_POWDER {
  EXTRA = 'Extra Chocolate Malt Powder',
  LIGHT = 'Light Chocolate Malt Powder',
  NO_CHOCOLATE = 'No Chocolate Malt Powder',
  CHOCOLATE = 'Chocolate Malt Powder',
  SUBSTITUTE = 'Substitute Chocolate Malt Powder'
}
