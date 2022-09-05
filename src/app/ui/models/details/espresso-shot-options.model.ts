export interface ExpressoShotOptions {
  expressoShots?: number;
  expressoRoastOptions?: EXPRESSO_ROAST_OPTIONS[];
  shotRep?: SHOT_PREP[];
  ristretoOrLongShot?: RISTRETTO_LONG_SHOT[];
}

export enum EXPRESSO_ROAST_OPTIONS {
  SIGNATURE = 'Signature Espresso Roast',
  BLONDE = 'Blonde Espresso Roast',
  DECAF = 'Decaf Espresso Roast',
  THIRD_DECAF = '1/3 Decaf Espresso Roast',
  HALF_DECAF = '1/2 Decaf Espresso Roast',
  TWO_THIRD_DECAF = '2/3 Decaf Espresso Roast'
}

export enum SHOT_PREP {
  UPSIDE_DOWN = 'Upside Down'
}

export enum RISTRETTO_LONG_SHOT {
  RISTRETTO = 'Ristretto',
  LONG_SHOT = 'Long Shot'
}
