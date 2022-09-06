import { UIType } from '../menu-config.model';

export interface Toppings {
  title: string;
  type: UIType;
  details:
    | [PUMPKIN_SPICE[], CINNAMON_DOLCE_SPRINKLES[]]
    | [CARAMEL_DRIZZLE[], MOCHA_DRIZZLE[], SPICED_APPLE_DRIZZLE[]]
    | [CHOCOLATE_CREAM_COLD[], PUMPKIN_CREAM_COLD[], SALTED_CARAMEL_CREAM_COLD[], VANILLA_SWEET_CREAM_COLD[]]
    | [POWDERS]
    | [WHIPPED_CREAM];
}

export enum PUMPKIN_SPICE {
  EXTRA = 'Extra Pumpkin Spice Topping',
  LIGHT = 'Light Pumpkin Spice Topping',
  NO_PUMPKIN = 'No Pumpkin Spice Topping',
  PUMPKIN = 'Pumpkin Spice Topping'
}

export enum CINNAMON_DOLCE_SPRINKLES {
  EXTRA = 'Extra Cinnamon Dolce Sprinkles',
  LIGHT = 'Light Cinnamon Dolce Sprinkles',
  NO_CINNAMON = 'No Cinnamon Dolce Sprinkles',
  CINNAMON = 'Cinnamon Dolce Sprinkles'
}

export enum CARAMEL_DRIZZLE {
  EXTRA = 'Extra Caramel Drizzle',
  LIGHT = 'Light Caramel Drizzle',
  NO_CARAMEL = 'No Caramel Drizzle',
  CARAMEL = 'Caramel Drizzle'
}

export enum MOCHA_DRIZZLE {
  EXTRA = 'Extra Mocha Drizzle',
  LIGHT = 'Light Mocha Drizzle',
  NO_MOCHA = 'No Mocha Drizzle',
  MOCHA = 'Mocha Drizzle'
}

export enum SPICED_APPLE_DRIZZLE {
  EXTRA = 'Extra Spiced Apple Drizzle',
  LIGHT = 'Light Spiced Apple Drizzle',
  NO_SPICED_APPLE = 'No Spiced Apple Drizzle',
  SPICED_APPLE = 'Spiced Apple Drizzle'
}

export enum CHOCOLATE_CREAM_COLD {
  EXTRA = 'Extra Chocolate Cream Cold Foam',
  LIGHT = 'Light Chocolate Cream Cold Foam',
  NO_CHOCOLATE = 'No Chocolate Cream Cold Foam',
  CHOCOLATE = 'Chocolate Cream Cold Foam',
  SUBSTITUTE = 'Substitute Chocolate Cream Cold Foam'
}

export enum PUMPKIN_CREAM_COLD {
  EXTRA = 'Extra Pumpkin Cream Cold Foam',
  LIGHT = 'Light Pumpkin Cream Cold Foam',
  NO_PUMPKIN = 'No Pumpkin Cream Cold Foam',
  PUMPKIN = 'Pumpkin Cream Cold Foam'
}

export enum SALTED_CARAMEL_CREAM_COLD {
  EXTRA = 'Extra Salted Caramel Cream Cold Foam',
  LIGHT = 'Light Salted Caramel Cream Cold Foam',
  NO_CARAMEL = 'No Salted Caramel Cream Cold Foam',
  CARAMEL = 'Salted Caramel Cream Cold Foam',
  SUBSTITUTE = 'Substitute Salted Caramel Cream Cold Foam'
}

export enum VANILLA_SWEET_CREAM_COLD {
  EXTRA = 'Extra Vanilla Sweet Cream Cold Foam',
  LIGHT = 'Light Vanilla Sweet Cream Cold Foam',
  NO_VANILLA = 'No Vanilla Sweet Cream Cold Foam',
  VANILLA = 'Vanilla Sweet Cream Cold Foam',
  SUBSTITUTE = 'Substitute Vanilla Sweet Cream Cold Foam'
}

export enum POWDERS {
  CINNAMON_POWDER = 'Cinnamon Powder'
}

export enum WHIPPED_CREAM {
  WHIPPED_CREAM = 'Whipped Cream'
}
