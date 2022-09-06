import { UIType } from '../menu-config.model';

export interface Flavors {
  title: string;
  type: UIType;
  details: [SAUCES[]] | [SYRUPS[]];
}

export enum SYRUPS {
  APPLE_BROWN_SUGAR = 'Apple Brown Sugar',
  BROWN_SUGAR_SYRUP = 'Brown Sugar Syrup',
  CARAMEL_SYRUP = 'Caramel Syrup',
  CINNAMON_DOLCE_SYRUP = 'Cinnamon Dolce Syrup',
  HAZELNUT_SYRUP = 'Hazelnut Syrup',
  PEPPERMINT_SYRUP = 'Peppermint Syrup',
  RASPBERRY_SYRUP = 'Raspberry Syrup',
  TOASTED_VANILLA_SYRUP = 'Toasted Vanilla Syrup',
  TOFFEE_NUT_SYRUP = 'Toffee Nut Syrup',
  VANILLA_SYRUP = 'Vanilla Syrup',
  SUGAR_FREE_VANILLA_SYRUP = 'Sugar Free Vanilla Syrup'
}

export enum SAUCES {
  MOCHA_SAUCE = 'Mocha Sauce',
  NEW_DARK_CARAMEL_SAUCE = 'New Dark Caramel Sauce',
  PUMPKIN_SAUCE = 'Pumpkin Sauce',
  WHITE_CHOCOLATE_MOCHA_SAUCE = 'White Chocolate Mocha Sauce'
}
