import { UIType } from '../menu-config.model';
import { AddIns } from './add-ins.model';
import { ExpressoShotOptions } from './espresso-shot-options.model';
import { Flavors } from './flavors.model';
import { Milk } from './milk.model';
import { Toppings } from './toppings.model';

export interface DetailData {
  calories?: number;
  size?: SIZE_OPTIONS[];
  customizations?: Customizations[];
  // milk?: Milk[];
  // flavors?: Flavors[];
  // toppings?: Toppings[];
  // tea?: Tea[];
  // addIns?: AddIns[];
  // espressoShotOptions?: ExpressoShotOptions[];
  // cupOptions?: CupSizes[];
}

export enum SIZE_OPTIONS {
  SHORT = 'Short 8 fl oz',
  TALL = 'Tall 12 fl oz',
  GRANDE = 'Grande 16 fl oz',
  VENTI = 'Venti 20 fl oz',
  DOPPIO = 'Doppio 1.5 fl oz',
  SOLO = 'Solo 0.75 fl oz',
  TRIPLE = 'Triple 2.25 fl oz',
  QUAD = 'Quad 3 fl oz'
}

export interface Customizations {
  title: string;
  details: Milk[] | Flavors[] | Toppings[] | Tea[] | AddIns[] | ExpressoShotOptions[] | CupSizes[];
}

export interface Tea {
  title: string;
  type: UIType;
  details: [TEA[]];
}

export enum TEA {
  CHAI = 'Chai'
}

export interface CupSizes {
  title: string;
  type: UIType;
  details: [CUP_SIZES[]];
}

export enum CUP_SIZES {
  TALL = 'Tall Cup',
  GRANDE = 'Grande Cup',
  VENIT = 'Venti Cup'
}
