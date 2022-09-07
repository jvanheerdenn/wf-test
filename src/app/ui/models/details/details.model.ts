import { UIType } from '../menu-config.model';

export interface DetailData {
  calories?: number;
  size?: SIZE_OPTIONS[];
  customizations?: Customizations[];
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
  details: BaseDetailCustomization[];
}

export interface BaseDetailCustomization {
  title: string;
  type: UIType;
  details: any;
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
