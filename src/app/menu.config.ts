import { TEA } from './ui/models/details/details.model';
import { SHOTS } from './ui/models/details/espresso-shot-options.model';
import { POWDERS, WHIPPED_CREAM } from './ui/models/details/toppings.model';
import { Menu } from './ui/models/menu-config.model';
import {
  DEFAULT_ALMONDMILK_CREAMER,
  DEFAULT_CARAMEL_COLDFOAM,
  DEFAULT_CARAMEL_DRIZZLE,
  DEFAULT_CHOCOLATE_COLDFOAM,
  DEFAULT_CHOCOLATE_POWDERS,
  DEFAULT_CINNAMON_TOPPING,
  DEFAULT_COCONUTMILK_CREAMER,
  DEFAULT_CREAM_CREAMER,
  DEFAULT_DETAIL_DATA,
  DEFAULT_EXPRESSO_OPTIONS,
  DEFAULT_HEAVY_CREAM_CREAMER,
  DEFAULT_LINE_THE_CUP,
  DEFAULT_LIQUID_SWEETNER,
  DEFAULT_MILK_CREAMER,
  DEFAULT_MILK_FOAM,
  DEFAULT_MILK_OPTIONS,
  DEFAULT_MILK_TEMPERATURE,
  DEFAULT_MOCHA_DRIZZLE,
  DEFAULT_NON_FAT_MILK_CREAMER,
  DEFAULT_OAT_MILK_CREAMER,
  DEFAULT_PUMPKIN_COLDFOAM,
  DEFAULT_PUMPKIN_TOPPING,
  DEFAULT_RISTRETO_LONG_SHOT,
  DEFAULT_ROOM,
  DEFAULT_SAUCES,
  DEFAULT_SIZE_OPTIONS_1,
  DEFAULT_SOY_MILK_CREAMER,
  DEFAULT_SPICED_DRIZZLE,
  DEFAULT_SWEETNER_PACKETS,
  DEFAULT_SYRUPS,
  DEFAULT_VANILLA_COLDFOAM,
  DEFAULT_VANILLA_CREAMER,
  DEFAULT_WATER,
  DEFAULT_WHOLE_MILK_CREAMER,
  MENU_TITLES
} from './ui/models/menu-constants';

export const menuConfig: Menu[] = [
  {
    submenuTitle: 'Drinks',
    submenuDetail: [
      {
        detailTitle: 'Hot Coffees',
        detailImg: 'https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Americanos',
            submenuDetail: [
              {
                detailTitle: 'Caffè Americano',
                detailImg: 'https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288',
                detailData: {
                  calories: 15,
                  size: [...DEFAULT_SIZE_OPTIONS_1],
                  customizations: [
                    {
                      title: MENU_TITLES.FLAVORS_TITLE,
                      details: [
                        { title: MENU_TITLES.SYRUPS_TITLE, type: 'counter', details: [DEFAULT_SYRUPS] },
                        { title: MENU_TITLES.SAUCES_TITLE, type: 'counter', details: [DEFAULT_SAUCES] }
                      ]
                    },
                    {
                      title: MENU_TITLES.TOPPINGS_TITLE,
                      details: [
                        {
                          title: MENU_TITLES.TOPPING_OPTIONS_TITLE,
                          type: 'dropdown',
                          details: [DEFAULT_PUMPKIN_TOPPING, DEFAULT_CINNAMON_TOPPING]
                        },
                        {
                          title: MENU_TITLES.DRIZZLE_TITLE,
                          type: 'dropdown',
                          details: [DEFAULT_CARAMEL_DRIZZLE, DEFAULT_MOCHA_DRIZZLE, DEFAULT_SPICED_DRIZZLE]
                        },
                        {
                          title: MENU_TITLES.COLD_FOAM_TITLE,
                          type: 'dropdown',
                          details: [
                            DEFAULT_CHOCOLATE_COLDFOAM,
                            DEFAULT_PUMPKIN_COLDFOAM,
                            DEFAULT_CARAMEL_COLDFOAM,
                            DEFAULT_VANILLA_COLDFOAM
                          ]
                        },
                        { title: MENU_TITLES.POWDERS_TITLE, type: 'dropdown', details: [POWDERS.CINNAMON_POWDER] },
                        { title: MENU_TITLES.WHIPPED_CREAM_TITLE, type: 'dropdown', details: [WHIPPED_CREAM.WHIPPED_CREAM] }
                      ]
                    },
                    {
                      title: MENU_TITLES.TEA_TITLE,
                      details: [{ title: MENU_TITLES.TEA_TITLE, type: 'counter', details: [[TEA.CHAI]] }]
                    },
                    {
                      title: MENU_TITLES.ADD_INS_TITLE,
                      details: [
                        { title: MENU_TITLES.LINE_THE_CUP_TITLE, type: 'dropdown', details: [DEFAULT_LINE_THE_CUP] },
                        { title: MENU_TITLES.ROOM_TITLE, type: 'dropdown', details: [DEFAULT_ROOM] },
                        {
                          title: MENU_TITLES.CREAMER_TITLE,
                          type: 'dropdown',
                          details: [
                            DEFAULT_MILK_CREAMER,
                            DEFAULT_ALMONDMILK_CREAMER,
                            DEFAULT_COCONUTMILK_CREAMER,
                            DEFAULT_CREAM_CREAMER,
                            DEFAULT_HEAVY_CREAM_CREAMER,
                            DEFAULT_NON_FAT_MILK_CREAMER,
                            DEFAULT_OAT_MILK_CREAMER,
                            DEFAULT_SOY_MILK_CREAMER,
                            DEFAULT_WHOLE_MILK_CREAMER,
                            DEFAULT_VANILLA_CREAMER
                          ]
                        },
                        { title: MENU_TITLES.WATER_TITLE, type: 'dropdown', details: [DEFAULT_WATER] },
                        { title: MENU_TITLES.LIQUID_SWEETNER_TITLE, type: 'counter', details: [DEFAULT_LIQUID_SWEETNER] },
                        { title: MENU_TITLES.SWEETNER_PACKETS_TITLE, type: 'counter', details: [DEFAULT_SWEETNER_PACKETS] }
                      ]
                    },
                    {
                      title: MENU_TITLES.ESPRESSO_OR_SHOT_OPTIONS_TITLE,
                      details: [
                        { title: MENU_TITLES.ESPRESSO_SHOTS_TITLE, type: 'counter', details: [[SHOTS.SHOTS_COUNTER]] },
                        { title: MENU_TITLES.ESPRESSO_ROAST_OPTIONS_TITLE, type: 'dropdown', details: [DEFAULT_EXPRESSO_OPTIONS] },
                        { title: MENU_TITLES.RISTRETTO_OR_LONG_SHOT_TITLE, type: 'dropdown', details: [DEFAULT_RISTRETO_LONG_SHOT] }
                      ]
                    }
                  ]
                }
              }
            ]
          },
          {
            submenuTitle: 'Brewed Coffees',
            submenuDetail: [
              {
                detailTitle: 'Veranda Blend®',
                detailImg: 'https://globalassets.starbucks.com/assets/2c8f40a3b37648539d74e271479b3f9a.jpg?impolicy=1by1_tight_288',
                detailData: {
                  calories: 5,
                  size: [...DEFAULT_SIZE_OPTIONS_1],
                  customizations: [
                    {
                      title: MENU_TITLES.FLAVORS_TITLE,
                      details: [
                        { title: MENU_TITLES.SYRUPS_TITLE, type: 'counter', details: [DEFAULT_SYRUPS] },
                        { title: MENU_TITLES.SAUCES_TITLE, type: 'counter', details: [DEFAULT_SAUCES] }
                      ]
                    },
                    {
                      title: MENU_TITLES.TOPPINGS_TITLE,
                      details: [
                        {
                          title: MENU_TITLES.TOPPING_OPTIONS_TITLE,
                          type: 'dropdown',
                          details: [DEFAULT_PUMPKIN_TOPPING, DEFAULT_CINNAMON_TOPPING]
                        },
                        {
                          title: MENU_TITLES.DRIZZLE_TITLE,
                          type: 'dropdown',
                          details: [DEFAULT_CARAMEL_DRIZZLE, DEFAULT_MOCHA_DRIZZLE, DEFAULT_SPICED_DRIZZLE]
                        },
                        {
                          title: MENU_TITLES.COLD_FOAM_TITLE,
                          type: 'dropdown',
                          details: [
                            DEFAULT_CHOCOLATE_COLDFOAM,
                            DEFAULT_PUMPKIN_COLDFOAM,
                            DEFAULT_CARAMEL_COLDFOAM,
                            DEFAULT_VANILLA_COLDFOAM
                          ]
                        },
                        { title: MENU_TITLES.POWDERS_TITLE, type: 'dropdown', details: [POWDERS.CINNAMON_POWDER] },
                        { title: MENU_TITLES.WHIPPED_CREAM_TITLE, type: 'dropdown', details: [WHIPPED_CREAM.WHIPPED_CREAM] }
                      ]
                    },
                    {
                      title: MENU_TITLES.TEA_TITLE,
                      details: [{ title: MENU_TITLES.TEA_TITLE, type: 'counter', details: [[TEA.CHAI]] }]
                    },
                    {
                      title: MENU_TITLES.ADD_INS_TITLE,
                      details: [
                        { title: MENU_TITLES.POWDERS_TITLE, type: 'dropdown', details: [DEFAULT_CHOCOLATE_POWDERS] },
                        { title: MENU_TITLES.LINE_THE_CUP_TITLE, type: 'dropdown', details: [DEFAULT_LINE_THE_CUP] },
                        { title: MENU_TITLES.ROOM_TITLE, type: 'dropdown', details: [DEFAULT_ROOM] },
                        {
                          title: MENU_TITLES.CREAMER_TITLE,
                          type: 'dropdown',
                          details: [
                            DEFAULT_MILK_CREAMER,
                            DEFAULT_ALMONDMILK_CREAMER,
                            DEFAULT_COCONUTMILK_CREAMER,
                            DEFAULT_CREAM_CREAMER,
                            DEFAULT_HEAVY_CREAM_CREAMER,
                            DEFAULT_NON_FAT_MILK_CREAMER,
                            DEFAULT_OAT_MILK_CREAMER,
                            DEFAULT_SOY_MILK_CREAMER,
                            DEFAULT_WHOLE_MILK_CREAMER,
                            DEFAULT_VANILLA_CREAMER
                          ]
                        },
                        { title: MENU_TITLES.WATER_TITLE, type: 'dropdown', details: [DEFAULT_WATER] },
                        { title: MENU_TITLES.LIQUID_SWEETNER_TITLE, type: 'counter', details: [DEFAULT_LIQUID_SWEETNER] },
                        { title: MENU_TITLES.SWEETNER_PACKETS_TITLE, type: 'counter', details: [DEFAULT_SWEETNER_PACKETS] }
                      ]
                    },
                    {
                      title: MENU_TITLES.ESPRESSO_OR_SHOT_OPTIONS_TITLE,
                      details: [
                        { title: MENU_TITLES.ESPRESSO_SHOTS_TITLE, type: 'counter', details: [[SHOTS.SHOTS_COUNTER]] },
                        { title: MENU_TITLES.ESPRESSO_ROAST_OPTIONS_TITLE, type: 'dropdown', details: [DEFAULT_EXPRESSO_OPTIONS] }
                      ]
                    }
                  ]
                }
              },
              {
                detailTitle: 'Caffè Misto',
                detailImg: 'https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_tight_288',
                detailData: {
                  calories: 110,
                  size: [...DEFAULT_SIZE_OPTIONS_1],
                  customizations: [
                    {
                      title: MENU_TITLES.MILK_TITLE,
                      details: [
                        { title: MENU_TITLES.MILK_OPTIONS_TITTLE, type: 'dropdown', details: [DEFAULT_MILK_OPTIONS] },
                        { title: MENU_TITLES.MILK_FOAM_TITLE, type: 'dropdown', details: [DEFAULT_MILK_FOAM] },
                        { title: MENU_TITLES.MILK_TEMPERATURE_TITLE, type: 'dropdown', details: [DEFAULT_MILK_TEMPERATURE] }
                      ]
                    },
                    {
                      title: MENU_TITLES.FLAVORS_TITLE,
                      details: [
                        { title: MENU_TITLES.SYRUPS_TITLE, type: 'counter', details: [DEFAULT_SYRUPS] },
                        { title: MENU_TITLES.SAUCES_TITLE, type: 'counter', details: [DEFAULT_SAUCES] }
                      ]
                    },
                    {
                      title: MENU_TITLES.TOPPINGS_TITLE,
                      details: [
                        {
                          title: MENU_TITLES.TOPPING_OPTIONS_TITLE,
                          type: 'dropdown',
                          details: [DEFAULT_PUMPKIN_TOPPING, DEFAULT_CINNAMON_TOPPING]
                        },
                        {
                          title: MENU_TITLES.DRIZZLE_TITLE,
                          type: 'dropdown',
                          details: [DEFAULT_CARAMEL_DRIZZLE, DEFAULT_MOCHA_DRIZZLE, DEFAULT_SPICED_DRIZZLE]
                        },
                        {
                          title: MENU_TITLES.COLD_FOAM_TITLE,
                          type: 'dropdown',
                          details: [
                            DEFAULT_CHOCOLATE_COLDFOAM,
                            DEFAULT_PUMPKIN_COLDFOAM,
                            DEFAULT_CARAMEL_COLDFOAM,
                            DEFAULT_VANILLA_COLDFOAM
                          ]
                        },
                        { title: MENU_TITLES.POWDERS_TITLE, type: 'dropdown', details: [POWDERS.CINNAMON_POWDER] },
                        { title: MENU_TITLES.WHIPPED_CREAM_TITLE, type: 'dropdown', details: [WHIPPED_CREAM.WHIPPED_CREAM] }
                      ]
                    },
                    {
                      title: MENU_TITLES.TEA_TITLE,
                      details: [{ title: MENU_TITLES.TEA_TITLE, type: 'counter', details: [[TEA.CHAI]] }]
                    },
                    {
                      title: MENU_TITLES.ADD_INS_TITLE,
                      details: [
                        { title: MENU_TITLES.LINE_THE_CUP_TITLE, type: 'dropdown', details: [DEFAULT_LINE_THE_CUP] },
                        { title: MENU_TITLES.ROOM_TITLE, type: 'dropdown', details: [DEFAULT_ROOM] },
                        {
                          title: MENU_TITLES.CREAMER_TITLE,
                          type: 'dropdown',
                          details: [
                            DEFAULT_MILK_CREAMER,
                            DEFAULT_ALMONDMILK_CREAMER,
                            DEFAULT_COCONUTMILK_CREAMER,
                            DEFAULT_CREAM_CREAMER,
                            DEFAULT_HEAVY_CREAM_CREAMER,
                            DEFAULT_NON_FAT_MILK_CREAMER,
                            DEFAULT_OAT_MILK_CREAMER,
                            DEFAULT_SOY_MILK_CREAMER,
                            DEFAULT_WHOLE_MILK_CREAMER,
                            DEFAULT_VANILLA_CREAMER
                          ]
                        },
                        { title: MENU_TITLES.WATER_TITLE, type: 'dropdown', details: [DEFAULT_WATER] },
                        { title: MENU_TITLES.LIQUID_SWEETNER_TITLE, type: 'counter', details: [DEFAULT_LIQUID_SWEETNER] },
                        { title: MENU_TITLES.SWEETNER_PACKETS_TITLE, type: 'counter', details: [DEFAULT_SWEETNER_PACKETS] }
                      ]
                    },
                    {
                      title: MENU_TITLES.ESPRESSO_OR_SHOT_OPTIONS_TITLE,
                      details: [
                        { title: MENU_TITLES.ESPRESSO_SHOTS_TITLE, type: 'counter', details: [[SHOTS.SHOTS_COUNTER]] },
                        { title: MENU_TITLES.ESPRESSO_ROAST_OPTIONS_TITLE, type: 'dropdown', details: [DEFAULT_EXPRESSO_OPTIONS] },
                        { title: MENU_TITLES.RISTRETTO_OR_LONG_SHOT_TITLE, type: 'dropdown', details: [DEFAULT_RISTRETO_LONG_SHOT] }
                      ]
                    }
                  ]
                }
              },
              {
                detailTitle: 'Featured Starbucks® Dark Roast Coffee',
                detailImg: 'https://globalassets.starbucks.com/assets/0279f9c5fa5941d2a65dd183d7a0b386.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Featured Medium Roast - Pike Place® Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Decaf Pike Place® Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/51bf549cd8e9434da941fec33b820d39.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Cappuccinos',
            submenuDetail: [
              {
                detailTitle: 'Cappuccino',
                detailImg: 'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_tight_288',
                detailData: {
                  calories: 15,
                  size: [...DEFAULT_SIZE_OPTIONS_1],
                  customizations: [
                    {
                      title: MENU_TITLES.FLAVORS_TITLE,
                      details: [
                        { title: MENU_TITLES.SYRUPS_TITLE, type: 'counter', details: [DEFAULT_SYRUPS] },
                        { title: MENU_TITLES.SAUCES_TITLE, type: 'counter', details: [DEFAULT_SAUCES] }
                      ]
                    },
                    {
                      title: MENU_TITLES.TOPPINGS_TITLE,
                      details: [
                        {
                          title: MENU_TITLES.TOPPING_OPTIONS_TITLE,
                          type: 'dropdown',
                          details: [DEFAULT_PUMPKIN_TOPPING, DEFAULT_CINNAMON_TOPPING]
                        },
                        {
                          title: MENU_TITLES.DRIZZLE_TITLE,
                          type: 'dropdown',
                          details: [DEFAULT_CARAMEL_DRIZZLE, DEFAULT_MOCHA_DRIZZLE, DEFAULT_SPICED_DRIZZLE]
                        },
                        {
                          title: MENU_TITLES.COLD_FOAM_TITLE,
                          type: 'dropdown',
                          details: [
                            DEFAULT_CHOCOLATE_COLDFOAM,
                            DEFAULT_PUMPKIN_COLDFOAM,
                            DEFAULT_CARAMEL_COLDFOAM,
                            DEFAULT_VANILLA_COLDFOAM
                          ]
                        },
                        { title: MENU_TITLES.POWDERS_TITLE, type: 'dropdown', details: [POWDERS.CINNAMON_POWDER] },
                        { title: MENU_TITLES.WHIPPED_CREAM_TITLE, type: 'dropdown', details: [WHIPPED_CREAM.WHIPPED_CREAM] }
                      ]
                    },
                    {
                      title: MENU_TITLES.TEA_TITLE,
                      details: [{ title: MENU_TITLES.TEA_TITLE, type: 'counter', details: [[TEA.CHAI]] }]
                    },
                    {
                      title: MENU_TITLES.ADD_INS_TITLE,
                      details: [
                        { title: MENU_TITLES.LINE_THE_CUP_TITLE, type: 'dropdown', details: [DEFAULT_LINE_THE_CUP] },
                        { title: MENU_TITLES.ROOM_TITLE, type: 'dropdown', details: [DEFAULT_ROOM] },
                        {
                          title: MENU_TITLES.CREAMER_TITLE,
                          type: 'dropdown',
                          details: [
                            DEFAULT_MILK_CREAMER,
                            DEFAULT_ALMONDMILK_CREAMER,
                            DEFAULT_COCONUTMILK_CREAMER,
                            DEFAULT_CREAM_CREAMER,
                            DEFAULT_HEAVY_CREAM_CREAMER,
                            DEFAULT_NON_FAT_MILK_CREAMER,
                            DEFAULT_OAT_MILK_CREAMER,
                            DEFAULT_SOY_MILK_CREAMER,
                            DEFAULT_WHOLE_MILK_CREAMER,
                            DEFAULT_VANILLA_CREAMER
                          ]
                        },
                        { title: MENU_TITLES.WATER_TITLE, type: 'dropdown', details: [DEFAULT_WATER] },
                        { title: MENU_TITLES.LIQUID_SWEETNER_TITLE, type: 'counter', details: [DEFAULT_LIQUID_SWEETNER] },
                        { title: MENU_TITLES.SWEETNER_PACKETS_TITLE, type: 'counter', details: [DEFAULT_SWEETNER_PACKETS] }
                      ]
                    },
                    {
                      title: MENU_TITLES.ESPRESSO_OR_SHOT_OPTIONS_TITLE,
                      details: [
                        { title: MENU_TITLES.ESPRESSO_SHOTS_TITLE, type: 'counter', details: [[SHOTS.SHOTS_COUNTER]] },
                        { title: MENU_TITLES.ESPRESSO_ROAST_OPTIONS_TITLE, type: 'dropdown', details: [DEFAULT_EXPRESSO_OPTIONS] },
                        { title: MENU_TITLES.RISTRETTO_OR_LONG_SHOT_TITLE, type: 'dropdown', details: [DEFAULT_RISTRETO_LONG_SHOT] }
                      ]
                    }
                  ]
                }
              }
            ]
          },
          {
            submenuTitle: 'Espresso Shots',
            submenuDetail: [
              {
                detailTitle: 'Espresso',
                detailImg: 'https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Espresso Con Panna',
                detailImg: 'https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Flat Whites',
            submenuDetail: [
              {
                detailTitle: 'Flat White',
                detailImg: 'https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Honey Almondmilk Flat White',
                detailImg: 'https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Lattes',
            submenuDetail: [
              {
                detailTitle: 'Pumpkin Spice Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/895d6b3916c14ad6862d88ce282e8838.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Caffè Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Cinnamon Dolce Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/284e1571faa748f2889d0b566b71d578.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks Reserve® Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/55083489399e435e81cf41d899051a5a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks Reserve® Hazelnut Bianco Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/049d23aac19047f4b3a40532cc24b510.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks® Blonde Vanilla Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Macchiatos',
            submenuDetail: [
              {
                detailTitle: 'Apple Crisp Oatmilk Macchiato',
                detailImg: 'https://globalassets.starbucks.com/assets/ea64c8877aa1400fa0b76de8210ad543.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Caramel Macchiato',
                detailImg: 'https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Espresso Macchiato',
                detailImg: 'https://globalassets.starbucks.com/assets/26495f2a8b644fe8960dd74e1891b7b7.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Mochas',
            submenuDetail: [
              {
                detailTitle: 'Caffè Mocha',
                detailImg: 'https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks Reserve® Dark Chocolate Mocha',
                detailImg: 'https://globalassets.starbucks.com/assets/ce6342b5aeea4607a0e866057e3b5a4c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'White Chocolate Mocha',
                detailImg: 'https://globalassets.starbucks.com/assets/3eab25199e994b689fa5c047fc31f217.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Hot Teas',
        detailImg: 'https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Chai Teas',
            submenuDetail: [
              {
                detailTitle: 'Chai Tea Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Chai Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/49bf4333e9d048498a59a5a2b958165f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Black Teas',
            submenuDetail: [
              {
                detailTitle: 'Earl Grey Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/6f780d5d392542c6b9b1a4412881cecc.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Teavana® London Fog Tea Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/180da7ecb6fa4d2686babe5619fa7b84.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Royal English Breakfast Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/e3554d07d1394ee79cfad80a383ba163.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Royal English Breakfast Tea Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/919eb07194f44a0b842c0260c3a286d8.jpg?impolicy=1by1_tight_288a'
              }
            ]
          },
          {
            submenuTitle: 'Green Teas',
            submenuDetail: [
              {
                detailTitle: `Emperor's Clouds & Mist®`,
                detailImg: 'https://globalassets.starbucks.com/assets/1a84d455abd84ac3b356c6523fce9ac8.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Matcha Tea Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/8b1b6d808cca4787afd2b30cf8dd5676.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Honey Citrus Mint Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/a5e64777b3cc412e9239b8a37328cb37.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Jade Citrus Mint® Brewed Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/6a59c09bb55c42f8a6a970e73c22caeb.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Herbal Teas',
            submenuDetail: [
              {
                detailTitle: 'Mint Majesty®',
                detailImg: 'https://globalassets.starbucks.com/assets/cf7469c84a444e4f9a341f8023558c77.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Peach Tranquility®',
                detailImg: 'https://globalassets.starbucks.com/assets/f3ecda7d7510434c9ed2b3167dcb4466.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Hot Drinks',
        detailImg: 'https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Hot Chocolates',
            submenuDetail: [
              {
                detailTitle: 'Hot Chocolate',
                detailImg: 'https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'White Hot Chocolate',
                detailImg: 'https://globalassets.starbucks.com/assets/6b385ad21e7245788eb2d2754ab6f823.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Caramel Apple Spice',
            submenuDetail: [
              {
                detailTitle: 'Caramel Apple Spice',
                detailImg: 'https://globalassets.starbucks.com/assets/39bab62a29214270b6b30eb838e2c5a6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Steamed Apple Juice',
                detailImg: 'https://globalassets.starbucks.com/assets/a9e551eb323e4f0a93cf91b165916950.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Steamers',
            submenuDetail: [
              {
                detailTitle: 'Pumpkin Spice Crème',
                detailImg: 'https://globalassets.starbucks.com/assets/e1b9156fb2514205a1abd1828d5ffb7b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Steamed Milk',
                detailImg: 'https://globalassets.starbucks.com/assets/8b656cabb99344269543833b7e787bbd.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Vanilla Crème',
                detailImg: 'https://globalassets.starbucks.com/assets/3f61a806f6ff4bc38e2e5fc0d0eef97c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Frappuccino® Blended Beverages',
        detailImg: 'https://globalassets.starbucks.com/assets/5ae10fb3c4964de19be98893c0a85f9d.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Coffee Frappuccino®',
            submenuDetail: [
              {
                detailTitle: 'Pumpkin Spice Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/5ae10fb3c4964de19be98893c0a85f9d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Apple Crisp Oatmilk Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/3b79a28dd72b42c58f2c48741de965ca.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Caramel Ribbon Crunch Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/22f8e0db2106468d953bce434f5328a3.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Espresso Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/c297d3528849499f81322d561575d94b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Caffè Vanilla Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/b8f963bfe65b4117af17d316e6bc3bc8.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Caramel Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/410cd92738514641bf497d4b6a18c30f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Coffee Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/72b70f11fe984732af4d8e539f53ca2d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Mocha Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/70198375bb0a442f8792437b5d1df972.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Java Chip Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/fe3131c518c34593938b32a67486fda0.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'White Chocolate Mocha Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/b9a003ae34ae48d0a6d1e1799b95d623.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Creme Frappuccino®',
            submenuDetail: [
              {
                detailTitle: 'Pumpkin Spice Crème Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/ea0badf8c4ba4dc6b3e64d112bda1e55.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Apple Crisp Oatmilk Crème Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/617cb4d8a7cd47599272b8459b231828.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Chocolate Cookie Crumble Crème Frappuccino®',
                detailImg: 'https://globalassets.starbucks.com/assets/e7b786fdbe544d43a5d471f9ef512047.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Caramel Ribbon Crunch Crème Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/cacdf793d82648329cfec7df33148da4.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Strawberry Crème Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/abd48a12ed76482790f2079db420f2c4.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Chai Crème Frappuccino®',
                detailImg: 'https://globalassets.starbucks.com/assets/f373281862494ecd8bc62db2e8868e75.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Double Chocolaty Chip Crème Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/e2ffa95d3c364d94b5dba029263bbf0e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Matcha Crème Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/17f8efcbdbc8476e9992503d4ee19f95.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Vanilla Bean Crème Frappuccino® Blended Crème',
                detailImg: 'https://globalassets.starbucks.com/assets/b7b496402286415c9c2be5bc1b4d7c3e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'White Chocolate Crème Frappuccino® Blended Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/2a903458538a45ca9746ae460080b76b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Cold Coffees',
        detailImg: 'https://globalassets.starbucks.com/assets/b2841a2f51744869932c31834909f0e9.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Cold Brews',
            submenuDetail: [
              {
                detailTitle: 'Pumpkin Cream Cold Brew',
                detailImg: 'https://globalassets.starbucks.com/assets/b2841a2f51744869932c31834909f0e9.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Chocolate Cream Cold Brew',
                detailImg: 'https://globalassets.starbucks.com/assets/ff03ead58dde47c485049baa5f736793.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Salted Caramel Cream Cold Brew',
                detailImg: 'https://globalassets.starbucks.com/assets/64da774b521447f690c20290cd4cb29d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks® Cold Brew Coffee',
                detailImg: 'https://globalassets.starbucks.com/assets/103b2b745f4848f884b793696a4573b6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Vanilla Sweet Cream Cold Brew',
                detailImg: 'https://globalassets.starbucks.com/assets/07951b9a7d7d47a2892dfa7a707fd318.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks® Cold Brew Coffee with Milk',
                detailImg: 'https://globalassets.starbucks.com/assets/bcf41cb5ff8f455fa945428c8d05c3f2.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Nitro Cold Brews',
            submenuDetail: [
              {
                detailTitle: 'Nitro Cold Brew',
                detailImg: 'https://globalassets.starbucks.com/assets/8c5dcfa053504f85b3e7af2fa451346d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Vanilla Sweet Cream Nitro Cold Brew',
                detailImg: 'https://globalassets.starbucks.com/assets/30b4049d49f64f8a8085e6d7808b4ae4.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Americano',
            submenuDetail: [
              {
                detailTitle: 'Iced Caffè Americano',
                detailImg: 'https://globalassets.starbucks.com/assets/921a409e6f55407da52eee4c8ad13ada.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Coffees',
            submenuDetail: [
              {
                detailTitle: 'Iced Coffee',
                detailImg: 'https://globalassets.starbucks.com/assets/c44960d6621844c99fa896a83278f122.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Coffee with Milk',
                detailImg: 'https://globalassets.starbucks.com/assets/062aac2b949a40e188e832c868803b58.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Espresso',
                detailImg: 'https://globalassets.starbucks.com/assets/7e0863732426489d81f0167e5a3fdaf2.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Shaken Espresso',
            submenuDetail: [
              {
                detailTitle: 'Iced Toasted Vanilla Oatmilk Shaken Espresso',
                detailImg: 'https://globalassets.starbucks.com/assets/9a51e00fff1c42e8acb62fcbfcef8838.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Brown Sugar Oatmilk Shaken Espresso',
                detailImg: 'https://globalassets.starbucks.com/assets/5bfe4972905a400c97717ce4176ebe92.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Chocolate Almondmilk Shaken Espresso',
                detailImg: 'https://globalassets.starbucks.com/assets/b0f45bda44464780a601e51cb404f780.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Shaken Espresso',
                detailImg: 'https://globalassets.starbucks.com/assets/ce4ff582482446d08d56ab49fe54bc40.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Flat Whites',
            submenuDetail: [
              {
                detailTitle: 'Iced Flat White',
                detailImg: 'https://globalassets.starbucks.com/assets/a1d7c679325f4c32ab5441f051aa0767.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Honey Almondmilk Flat White',
                detailImg: 'https://globalassets.starbucks.com/assets/a651497f08314edd9a213950c2865e8c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Lattes',
            submenuDetail: [
              {
                detailTitle: 'Iced Pumpkin Spice Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/c3f556afdd4e4a18b96f51135afe2de2.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks Reserve® Iced Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/5d1720adf5e7485a9d36d508b7b1be06.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks Reserve® Iced Hazelnut Bianco Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/196709c5870249dd9c2408469dd70df1.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Caffè Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Cinnamon Dolce Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/b5ee0554cdd64959a86530922cea7991.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Starbucks® Blonde Vanilla Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/1b317a079984402895bb5cf4d2894940.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Macchiatos',
            submenuDetail: [
              {
                detailTitle: 'Iced Apple Crisp Oatmilk Macchiato',
                detailImg: 'https://globalassets.starbucks.com/assets/e306068c233e455bb8804fea9d514dce.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Caramel Macchiato',
                detailImg: 'https://globalassets.starbucks.com/assets/363835b1db024636adeb4089ebb96291.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Mochas',
            submenuDetail: [
              {
                detailTitle: 'Iced White Chocolate Mocha',
                detailImg: 'https://globalassets.starbucks.com/assets/b80d893714854b5c946ee6c7f0d369d7.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Caffè Mocha',
                detailImg: 'https://globalassets.starbucks.com/assets/0360378c6e774cc3a38d870fc75d5462.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks Reserve® Iced Dark Chocolate Mocha',
                detailImg: 'https://globalassets.starbucks.com/assets/a3368f72724f4b70950ac39fb23b5836.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Iced Teas',
        detailImg: 'https://globalassets.starbucks.com/assets/de6d02e888c74eac9f6ea19c5492b8e8.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Bottled Teas',
            submenuDetail: [
              {
                detailTitle: 'Teavana® Sparkling Unsweetened Peach Nectarine Green Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/de6d02e888c74eac9f6ea19c5492b8e8.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Teavana® Mango Black Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/1948b8afbe464ff5b22e0fae35c65550.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Black Teas',
            submenuDetail: [
              {
                detailTitle: 'Iced Black Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/f56f2f6798504d72812581fbd3c326b8.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Black Tea Lemonade',
                detailImg: 'https://globalassets.starbucks.com/assets/7b483f4e212b4e18ac7ed488c10fa25c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Royal English Breakfast Tea Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/c21355c84f60481da265614667b168d8.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced London Fog Tea Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/530e6f066a5d433d93fcc088e4b39120.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Chai Teas',
            submenuDetail: [
              {
                detailTitle: 'Iced Chai Tea Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/98c8bafe1e2241f3ad02212eca2376e3.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Green Teas',
            submenuDetail: [
              {
                detailTitle: 'Iced Peach Green Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/2e363c918bc74d05965eb6e635293d00.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Peach Green Tea Lemonade',
                detailImg: 'https://globalassets.starbucks.com/assets/bebc2b416fb44f69a193be358ad8b3f8.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Matcha Tea Latte',
                detailImg: 'https://globalassets.starbucks.com/assets/08f75b01cd3c46af9d8665c5912341e7.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Green Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/e88d602c79fb4f359b0891857182800f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Green Tea Lemonade',
                detailImg: 'https://globalassets.starbucks.com/assets/9d6748ad5ded472da7a03d0d99a1f8a7.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Matcha Lemonade',
                detailImg: 'https://globalassets.starbucks.com/assets/730f5d78c6304eda88c960734fb1a8a4.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Iced Herbal Teas',
            submenuDetail: [
              {
                detailTitle: 'Iced Passion Tango® Tea',
                detailImg: 'https://globalassets.starbucks.com/assets/8b91a3ac49114445b4b6f2acf58a03ec.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Passion Tango® Tea Lemonade',
                detailImg: 'https://globalassets.starbucks.com/assets/e390f12d2da24c7b931c5b548f8c42dc.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Cold Drinks',
        detailImg: 'https://globalassets.starbucks.com/assets/358b62402a844a3e9567d70a9790032f.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Starbucks Refreshers™',
            submenuDetail: [
              {
                detailTitle: 'Dragon Drink® Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/358b62402a844a3e9567d70a9790032f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Mango Dragonfruit Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/c51376156a204e69aba133d3b9009171.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/5474a99cd4854a909613ae6e094dbfc9.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Paradise Drink Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/7ef4d20aa4ed4587ac02b0e694edceef.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/0a7f3df9fe5b4152940bd84bb2bea7f3.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Pineapple Passionfruit Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/a81d75c9b8914b00912006411fa2f095.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Pineapple Passionfruit Lemonade Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/4967c4f8e64346fcb8404948c283dd00.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Pink Drink Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/e0cd6e8588b6431d9d6f702bde6ee41c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Strawberry Açaí Starbucks Refreshers® Beverage',
                detailImg: 'https://globalassets.starbucks.com/assets/3a62ac7842934f4991ddca2b9bb4c029.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Juice',
            submenuDetail: [
              {
                detailTitle: 'Starbucks BAYA™ Energy Mango Guava',
                detailImg: 'https://globalassets.starbucks.com/assets/a907648a21784d748b11cbf132c56772.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Evolution Fresh® Organic Vital Berry',
                detailImg: 'https://globalassets.starbucks.com/assets/e707826e061046d79b26cc165ec190a6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Evolution Fresh® Organic Defense Up®',
                detailImg: 'https://globalassets.starbucks.com/assets/3ef9580206174cbb9ca3e74cc9834f54.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Evolution Fresh® Orange',
                detailImg: 'https://globalassets.starbucks.com/assets/e07696c46d774fb3b971773b433bab0b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Evolution Fresh® Organic Super Fruit Greens',
                detailImg: 'https://globalassets.starbucks.com/assets/3f7604be154a4f6790defa0a27c9ad20.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Evolution Fresh® Mighty Watermelon',
                detailImg: 'https://globalassets.starbucks.com/assets/24f36ed0145d4511840bd543506c7da0.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Tree Top Apple Juice Box',
                detailImg: 'https://globalassets.starbucks.com/assets/307222bd6ea446758f6a190861bf8b24.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks BAYA™ Energy Raspberry Lime',
                detailImg: 'https://globalassets.starbucks.com/assets/bf2959cba06c42f0a1fc41c11da5f44c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Lemonade',
                detailImg: 'https://globalassets.starbucks.com/assets/b5d9c74a812a4b46b2a100baed559f84.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Blended Strawberry Lemonade',
                detailImg: 'https://globalassets.starbucks.com/assets/381ddaee19154b759eeea816c1890aec.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Milk',
            submenuDetail: [
              {
                detailTitle: 'Horizon® Chocolate Organic Milk',
                detailImg: 'https://globalassets.starbucks.com/assets/d5d9e3b1e7794fa6bba08c269c4f59a6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Horizon® Organic Lowfat Milk Box',
                detailImg: 'https://globalassets.starbucks.com/assets/b8ee8032716f46f48167c1227577eddf.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'SBC Milk',
                detailImg: 'https://globalassets.starbucks.com/assets/22957ce7f042474892b8fe1e75d76ebe.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Horizon® Organic Vanilla Milk Box',
                detailImg: 'https://globalassets.starbucks.com/assets/c9a4d94f65fc49f2810084402a729d90.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Sparkling Water',
            submenuDetail: [
              {
                detailTitle: 'Galvanina Sparkling Water',
                detailImg: 'https://globalassets.starbucks.com/assets/f0ce895c1080458eab6d026890f26de3.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Spindrift® Grapefruit Sparkling Water',
                detailImg: 'https://globalassets.starbucks.com/assets/16aadeddc3cf4f87a9a2cb0730b1b997.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Spindrift® Raspberry Lime Sparkling Water',
                detailImg: 'https://globalassets.starbucks.com/assets/959fee492e90447b8d17fbf511b36819.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Galvanina Sparkling Water - Lime',
                detailImg: 'https://globalassets.starbucks.com/assets/fc7cf27aec2f4487a743af97d9057cfd.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Water',
            submenuDetail: [
              {
                detailTitle: 'DASANI Bottled Water',
                detailImg: 'https://globalassets.starbucks.com/assets/fe3ff74bbc4442d9bd1874f0e2f8c285.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Ethos® Bottled Water',
                detailImg: 'https://globalassets.starbucks.com/assets/db9386b255ed440b893861e87f368934.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: `Hawai'i Volcanic Water`,
                detailImg: 'https://globalassets.starbucks.com/assets/ae65fe747ff242789a426bce82b47b9e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      }
    ]
  },
  {
    submenuTitle: 'Food',
    submenuDetail: [
      {
        detailTitle: 'Hot Breakfast',
        detailImg: 'https://globalassets.starbucks.com/assets/27bd607e92354742bc8cf46b23f4ce39.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Breakfast Sandwiches & Wraps',
            submenuDetail: [
              {
                detailTitle: 'Bacon, Sausage & Egg Wrap',
                detailImg: 'https://globalassets.starbucks.com/assets/27bd607e92354742bc8cf46b23f4ce39.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Impossible™ Breakfast Sandwich',
                detailImg: 'https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Bacon, Gouda & Egg Sandwich',
                detailImg: 'https://globalassets.starbucks.com/assets/76909e4b00b5430faef132b2fa93e40b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Double-Smoked Bacon, Cheddar & Egg Sandwich',
                detailImg: 'https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Turkey Bacon, Cheddar & Egg White Sandwich',
                detailImg: 'https://globalassets.starbucks.com/assets/b7e25a03655741869ced8dfde8c70659.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Sausage, Cheddar & Egg Sandwich',
                detailImg: 'https://globalassets.starbucks.com/assets/c96aed66f1bf4ba3a9a545a497873ede.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Spinach, Feta & Egg White Wrap',
                detailImg: 'https://globalassets.starbucks.com/assets/e4583a7fdc89458983fdacb248debb10.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Avocado Spread',
                detailImg: 'https://globalassets.starbucks.com/assets/3d32d9ac0991482596873baa3f649211.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Sous Vide Egg Bites',
            submenuDetail: [
              {
                detailTitle: 'Kale & Mushroom Egg Bites',
                detailImg: 'https://globalassets.starbucks.com/assets/1cc3dc31c716491e8713f5bae6fb5ce4.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Bacon & Gruyère Egg Bites',
                detailImg: 'https://globalassets.starbucks.com/assets/ff22cb70c2fe4ba6b3d30150b0cf89cf.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Egg White & Roasted Red Pepper Egg Bites',
                detailImg: 'https://globalassets.starbucks.com/assets/9e2c9538d66e4c43844b154b14b2f501.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Bakery',
        detailImg: 'https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Plain Bagel',
            submenuDetail: [
              {
                detailTitle: 'Plain Bagel',
                detailImg: 'https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Cinnamon Raisin Bagel',
                detailImg: 'https://globalassets.starbucks.com/assets/b4bce2e2d28141e79b64f9e2de4a789c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Everything Bagel',
                detailImg: 'https://globalassets.starbucks.com/assets/aab900db615743f4a870b09ef8885436.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Avocado Spread',
                detailImg: 'https://globalassets.starbucks.com/assets/3d32d9ac0991482596873baa3f649211.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Cake Pops',
            submenuDetail: [
              {
                detailTitle: 'Owl Cake Pop',
                detailImg: 'https://globalassets.starbucks.com/assets/4f386744ed514108b07300d8b81b2d27.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Unicorn Cake Pop',
                detailImg: 'https://globalassets.starbucks.com/assets/04a0f8b8638946b48a5f0cfe4471d06d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Cookies & Cream Cake Pop',
                detailImg: 'https://globalassets.starbucks.com/assets/16ac697da62a4db3add2a1addc2b3799.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Birthday Cake Pop',
                detailImg: 'https://globalassets.starbucks.com/assets/5465db4bce6140609788162ffa76c41f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Chocolate Cake Pop',
                detailImg: 'https://globalassets.starbucks.com/assets/9ca96bf78afb4b91975946fd4528c24d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Cookies, Brownies & Bars',
            submenuDetail: [
              {
                detailTitle: 'Lime-Frosted Coconut Bar',
                detailImg: 'https://globalassets.starbucks.com/assets/9bdc63ce47a647d88550e5cc5c357cd6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Bullseye Cookie',
                detailImg: 'https://globalassets.starbucks.com/assets/c2e47d51ab104439a7bc2f76e0903285.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Double Chocolate Brownie',
                detailImg: 'https://globalassets.starbucks.com/assets/f827715797044a78bb79b86728a079cf.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Chocolate Chip Cookie',
                detailImg: 'https://globalassets.starbucks.com/assets/7274a0da5453434aaa63b133edd3ce5c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Marshmallow Dream Bar',
                detailImg: 'https://globalassets.starbucks.com/assets/f4c1a1c5044d4f5e883ac4cbc401cf32.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Croissants',
            submenuDetail: [
              {
                detailTitle: 'Ham & Swiss Croissant',
                detailImg: 'https://globalassets.starbucks.com/assets/4ad44b1732ba425d9d095f3fa0a09771.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Butter Croissant',
                detailImg: 'https://globalassets.starbucks.com/assets/e39e1d6044634535a027301d982c5842.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Almond Croissant',
                detailImg: 'https://globalassets.starbucks.com/assets/2637b25fc9da4e8d981d1ff02f73a619.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Chocolate Croissant',
                detailImg: 'https://globalassets.starbucks.com/assets/11a5dc6219434a4cbf81b195c14a393e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Loaves & Cakes',
            submenuDetail: [
              {
                detailTitle: 'Cinnamon Coffee Cake',
                detailImg: 'https://globalassets.starbucks.com/assets/f245bb86e2b74e42b8e6888f886930ef.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iced Lemon Loaf',
                detailImg: 'https://globalassets.starbucks.com/assets/c636153c255049a487da5db5b9d5f631.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Pumpkin & Pepita Loaf',
                detailImg: 'https://globalassets.starbucks.com/assets/383fdc2a74234d0f97adf670d009541a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Banana Walnut & Pecan Loaf',
                detailImg: 'https://globalassets.starbucks.com/assets/eef689b61a0b4e71bfab30a20f89b589.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Danishes & Doughnuts',
            submenuDetail: [
              {
                detailTitle: 'Cheese Danish',
                detailImg: 'https://globalassets.starbucks.com/assets/b87eeb626b344c4a8ccb042e4aff4ab9.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Glazed Doughnut',
                detailImg: 'https://globalassets.starbucks.com/assets/1525945a0a0342eaa028aa20053b982f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Muffins & Scones',
            submenuDetail: [
              {
                detailTitle: 'Pumpkin Cream Cheese Muffin',
                detailImg: 'https://globalassets.starbucks.com/assets/e1a4f06b1e9c42f9833ea81409119eb9.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Pumpkin Scone',
                detailImg: 'https://globalassets.starbucks.com/assets/11e332fbb04d47a3a3995d332e49de95.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Blueberry Scone',
                detailImg: 'https://globalassets.starbucks.com/assets/be269a8f32c14f0cb58b81a50d1d100e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Petite Vanilla Bean Scone',
                detailImg: 'https://globalassets.starbucks.com/assets/16c051a3e36d4ee0ba4007396fe9f479.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Blueberry Muffin',
                detailImg: 'https://globalassets.starbucks.com/assets/7d4665b4af2541e387336966c6e3f1fb.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Lunch',
        detailImg: 'https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Warm Sandwiches',
            submenuDetail: [
              {
                detailTitle: 'Crispy Grilled Cheese on Sourdough',
                detailImg: 'https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Ham & Swiss on Baguette',
                detailImg: 'https://globalassets.starbucks.com/assets/39c8d371efed45f18ba0d21f59c6229a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Turkey, Provolone & Pesto on Ciabatta',
                detailImg: 'https://globalassets.starbucks.com/assets/29a78190283c40f0a7978baa7f637e05.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Tomato & Mozzarella on Focaccia',
                detailImg: 'https://globalassets.starbucks.com/assets/c5bab25d33c1475aa7a23d9d09145b2f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Avocado Spread',
                detailImg: 'https://globalassets.starbucks.com/assets/3d32d9ac0991482596873baa3f649211.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Protein Boxes',
            submenuDetail: [
              {
                detailTitle: 'Eggs & Gouda Protein Box',
                detailImg: 'https://globalassets.starbucks.com/assets/b2a7ab59ca1c430f8e2726df52a6e6da.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Cheese Trio Protein Box',
                detailImg: 'https://globalassets.starbucks.com/assets/87caae0d7e7a46f9868b9e49208f6b02.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Cheddar & Uncured Salami Protein Box',
                detailImg: 'https://globalassets.starbucks.com/assets/6ab18a5258254c998089346c67432f11.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Chickpea Bites & Avocado Protein Box',
                detailImg: 'https://globalassets.starbucks.com/assets/90710b7d65e942fd9de3418767d2a5a7.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Eggs & Cheddar Protein Box',
                detailImg: 'https://globalassets.starbucks.com/assets/f9c7a91ad6f2408ba19d7a274dadeadd.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'PB&J Protein Box',
                detailImg: 'https://globalassets.starbucks.com/assets/85c505911d6a408fb93b8b0b069cc9ad.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Cheese & Fruit Protein Box',
                detailImg: 'https://globalassets.starbucks.com/assets/8fe70ac5d94145319fdd6f23545c8aa1.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Snacks & Sweets',
        detailImg: 'https://globalassets.starbucks.com/assets/d513aab3a617481ab369c227421e6f75.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Biscotti & Cookies',
            submenuDetail: [
              {
                detailTitle: 'Dipped Madeleines',
                detailImg: 'https://globalassets.starbucks.com/assets/d513aab3a617481ab369c227421e6f75.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Madeleines',
                detailImg: 'https://globalassets.starbucks.com/assets/d76e82a4f5434f719083b3b2d03bf008.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Vanilla Biscotti with Almonds',
                detailImg: 'https://globalassets.starbucks.com/assets/8a984f426b504c6fa6af895cd09cf8df.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Shortbread Cookies',
                detailImg: 'https://globalassets.starbucks.com/assets/c5d9a97775544dfb87e1c4283c0e70fd.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Rip van Wafels - Honey & Oats',
                detailImg: 'https://globalassets.starbucks.com/assets/88eb640cf0844a0a82db9fbfb8a679d7.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Chocolates & Candy',
            submenuDetail: [
              {
                detailTitle: 'Salted Almond Chocolate Bites',
                detailImg: 'https://globalassets.starbucks.com/assets/1ddc6371b2dc4bdc929fac84d962e01a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Dark Chocolate Covered Espresso Beans',
                detailImg: 'https://globalassets.starbucks.com/assets/c4bd8788c72b416c99c5134680e1c8e5.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Dark Chocolate Peanut Butter Cups',
                detailImg: 'https://globalassets.starbucks.com/assets/806e28baa7f5412a8300774ac4eda5ae.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Fruit & Nuts',
            submenuDetail: [
              {
                detailTitle: 'Squirrel Brand® Fruit & Nut',
                detailImg: 'https://globalassets.starbucks.com/assets/b861c0fb0ffb45b4833131cec8524a1c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Squirrel - Classic Almonds',
                detailImg: 'https://globalassets.starbucks.com/assets/4e41f67af2954043b02d84a3880c7565.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Peter Rabbit™ Organics Apple & Grape',
                detailImg: 'https://globalassets.starbucks.com/assets/83501c94dc5e4086992d804421989c9b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Peter Rabbit™ Organics Strawberry Banana',
                detailImg: 'https://globalassets.starbucks.com/assets/b510d3c921ec4e4b918759886fc8441d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Gum & Mints',
            submenuDetail: [
              {
                detailTitle: 'Spearmint Gum',
                detailImg: 'https://globalassets.starbucks.com/assets/6bee544f0b764d16b953e0a5cd5ece19.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Popcorn & Chips',
            submenuDetail: [
              {
                detailTitle: 'Starbucks Butter Popcorn',
                detailImg: 'https://globalassets.starbucks.com/assets/f276aedf4dd044db96eb6f752f76ab2b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Hippeas® - White Cheddar',
                detailImg: 'https://globalassets.starbucks.com/assets/afb612ca41724967b87c3cd14d2dc486.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Salt & Vinegar Kettle Potato Chips',
                detailImg: 'https://globalassets.starbucks.com/assets/412eb77d99114391b480a77cae3fdd08.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Perfectly Salted Chips',
                detailImg: 'https://globalassets.starbucks.com/assets/f2dcdf71b9d54e4ca05ff5c4936a8fcc.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Meat & Cheese',
            submenuDetail: [
              {
                detailTitle: 'Country Archer - Hickory Smoked Turkey Jerkey',
                detailImg: 'https://globalassets.starbucks.com/assets/b2e21f67841b4173b31f2fdaf7682704.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Country Archer Original Beef Jerky',
                detailImg: 'https://globalassets.starbucks.com/assets/7612c00c904b4eb0b5dd2cae87cb862b.jpg'
              },
              {
                detailTitle: 'String Cheese',
                detailImg: 'https://globalassets.starbucks.com/assets/e879f68ee1db45e38e71249918f5f2fe.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Snack Bars',
            submenuDetail: [
              {
                detailTitle: 'Perfect Bar® - Dark Chocolate Chip Peanut Butter',
                detailImg: 'https://globalassets.starbucks.com/assets/91c537bbff3749c29b2ac237a172c305.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Perfect Bar® Peanut Butter',
                detailImg: 'https://globalassets.starbucks.com/assets/235439007f2f4ac8af8ea6fa408b105e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'KIND - Almond Coconut Cashew Chai',
                detailImg: 'https://globalassets.starbucks.com/assets/08b2e19d7eb941c0a00d6a685058b6e9.jpg'
              },
              {
                detailTitle: 'KIND® Blueberry Vanilla & Cashew Bar',
                detailImg: 'https://globalassets.starbucks.com/assets/ed3836b9b1584f258435b8fd2751b2fc.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'KIND Peanut Butter Dark Chocolate Bar',
                detailImg: 'https://globalassets.starbucks.com/assets/bf886dd85b944ce9b08e012c2405538e.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'KIND® Salted Caramel & Dark Chocolate Nut Bar',
                detailImg: 'https://globalassets.starbucks.com/assets/4163fc4c73ef40ea93b7bee2cd0de709.jpg'
              },
              {
                detailTitle: `That's It® - Apple + Blueberry Bar`,
                detailImg: 'https://globalassets.starbucks.com/assets/1f5f286b7f5c488994f63743ce1a65c6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: `That's It® - Apple + Mango Bar`,
                detailImg: 'https://globalassets.starbucks.com/assets/ecfc6650e4a74b268ec49f27d3d8b895.jpg'
              },
              {
                detailTitle: 'This Bar Saves Lives™ - Dark Chocolate Cherry & Sea Salt Bar',
                detailImg: 'https://globalassets.starbucks.com/assets/83f481a7614c479490c73f1600837644.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'This Bar Saves Lives™ - Dark Chocolate Peanut Butter',
                detailImg: 'https://globalassets.starbucks.com/assets/2553a48b8ea541989d52cbf729415fb1.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'This Bar Saves Lives™ Madagascar Vanilla Almond & Honey Bar',
                detailImg: 'https://globalassets.starbucks.com/assets/37fb9f4b5cad49b592154bd3e80c4ff6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'This Bar Saves Lives™ - Wild Blueberry Pistachio Bar',
                detailImg: 'https://globalassets.starbucks.com/assets/c36ff04cb50443adbdadfb6e3a0ef7cb.jpg'
              }
            ]
          },
          {
            submenuTitle: 'Spreads',
            submenuDetail: [
              {
                detailTitle: 'Avocado Spread',
                detailImg: 'https://globalassets.starbucks.com/assets/3d32d9ac0991482596873baa3f649211.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Oatmeal & Yogurt',
        detailImg: 'https://globalassets.starbucks.com/assets/0612427b8d134a098b6f7457fdac44d2.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Oatmeal & Yogurt',
            submenuDetail: [
              {
                detailTitle: 'Rolled & Steel-Cut Oatmeal',
                detailImg: 'https://globalassets.starbucks.com/assets/0612427b8d134a098b6f7457fdac44d2.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Berry Trio Parfait',
                detailImg: 'https://globalassets.starbucks.com/assets/bb65a9c21ce34ad5b9f99f58615b8211.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Strawberry Overnight Grains',
                detailImg: 'https://globalassets.starbucks.com/assets/d9814c54a23442e880665176d4047a13.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      }
    ]
  },
  {
    submenuTitle: 'At Home Coffee',
    submenuDetail: [
      {
        detailTitle: 'Whole Bean',
        detailImg: 'https://globalassets.starbucks.com/assets/ee5e2a54ceeb42319dde7259f15f27d5.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Starbucks Reserve®',
            submenuDetail: [
              {
                detailTitle: 'Rwanda Hingakawa Starbucks Reserve®',
                detailImg: 'https://globalassets.starbucks.com/assets/ee5e2a54ceeb42319dde7259f15f27d5.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Sun-Dried Zambia Ngoli Estate Whole Bean',
                detailImg: 'https://globalassets.starbucks.com/assets/b16e8078e4584a06b66a2ab0fb4a4e0a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Vietnam Da Lat Starbucks Reserve®',
                detailImg: 'https://globalassets.starbucks.com/assets/09c15ddea6b04dc8a4151e273692307d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Costa Rica Naranjo Starbucks Reserve®',
                detailImg: 'https://globalassets.starbucks.com/assets/3b9ffedbbd7341fda7887bd7def1a6b3.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: `Starbucks Reserve® Hawai'i Ka'u`,
                detailImg: 'https://globalassets.starbucks.com/assets/8bbee51774bb4ee79553e7b911a7807b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Blonde Roast',
            submenuDetail: [
              {
                detailTitle: 'Veranda Blend®',
                detailImg: 'https://globalassets.starbucks.com/assets/7ecdba6f53364ac1b931b40c4b11f9f1.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Starbucks® Blonde Espresso Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/9f1e696dfebf4e43b706dff28840debe.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Medium Roast',
            submenuDetail: [
              {
                detailTitle: 'Single-Origin Guatemala Casi Cielo®',
                detailImg: 'https://globalassets.starbucks.com/assets/dcd3cea3f1d24561a8bd4571bee90fac.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: `Siren's Blend™`,
                detailImg: 'https://globalassets.starbucks.com/assets/9779bf438c8c410cb75c61827e40baa2.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Guatemala Antigua',
                detailImg: 'https://globalassets.starbucks.com/assets/2f673d715cd1453fa1673ad04d08fb2d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Pike Place® Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/67925c5957eb4a27a68a6262552a7b9a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Organic Yukon Blend®',
                detailImg: 'https://globalassets.starbucks.com/assets/e6505ad36e834316971607823270cdab.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Dark Roast',
            submenuDetail: [
              {
                detailTitle: 'Decaf Sumatra',
                detailImg: 'https://globalassets.starbucks.com/assets/6b684fdb10a843c88f7e6ddcc2bd9cb5.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Caffè Verona®',
                detailImg: 'https://globalassets.starbucks.com/assets/32355dbaa8634b11b9cbee138046bab9.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Espresso Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/049bcb69cc8c4c25820f97d3c7c90c28.jpg'
              },
              {
                detailTitle: 'Italian Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/a48597800f844315a64a06a060358b45.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Komodo Dragon Blend®',
                detailImg: 'https://globalassets.starbucks.com/assets/bce63b62a7c840ab96e1c761de1834a4.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Sumatra',
                detailImg: 'https://globalassets.starbucks.com/assets/a357a730a46747fd86ab26540480e44c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'VIA® Instant',
        detailImg: 'https://globalassets.starbucks.com/assets/713f533b151b4d4d92d76eddeb06d4a2.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Flavored',
            submenuDetail: [
              {
                detailTitle: 'VIA® Sweetened Iced Coffee',
                detailImg: 'https://globalassets.starbucks.com/assets/713f533b151b4d4d92d76eddeb06d4a2.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Blonde Roast',
            submenuDetail: [
              {
                detailTitle: 'VIA® Veranda Blend™',
                detailImg: 'https://globalassets.starbucks.com/assets/3f85a9b6cbdf4e1c90ad02bb8be1acfa.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Medium Roast',
            submenuDetail: [
              {
                detailTitle: 'Starbucks VIA® Instant Pike Place® Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/4c4bd49d19984ce29cc5f158a0242687.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          },
          {
            submenuTitle: 'Dark Roast',
            submenuDetail: [
              {
                detailTitle: 'VIA® Italian Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/375825d752104a3ca4a91af1a6068373.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'VIA® Decaf Italian Roast',
                detailImg: 'https://globalassets.starbucks.com/assets/d0fdab89dd634b1b90e6468a947f2c53.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      }
    ]
  },
  {
    submenuTitle: 'Merchandise',
    submenuDetail: [
      {
        detailTitle: 'Cold Cups',
        detailImg: 'https://globalassets.starbucks.com/assets/8ba50cab5b1f48ad839f99a7194e5881.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Cold Cups',
            submenuDetail: [
              {
                detailTitle: 'Siren Tail Stainless-Steel Cold Cup - 24 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/8ba50cab5b1f48ad839f99a7194e5881.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iridescent Plastic Cold Cup - 24 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/148cf6b3ff334e9a82e8b6d252d5cf76.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Siren Stainless-Steel Cold Cup - 24 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/7cdee6fd0f1a4d8c8fb90672769c349c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Tinted Bling Plastic Cold Cup - 24 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/01fe3493b216449bb4a1419bed5d8b10.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Siren Logo Plastic Cold Cup - 24 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/2c61f6c2920c4b49973a160f9c72a23c.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Reusable Plastic Cold-Cup Straw Pack',
                detailImg: 'https://globalassets.starbucks.com/assets/f5c6bccc079e45b383ffc282b83db5a4.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Cold To-Go Cup - 24 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/b3c749e064534f608fcc84076329f39d.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Tumblers',
        detailImg: 'https://globalassets.starbucks.com/assets/e5bfbb40a5c84995b4e61449f8d5ad3f.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Tumblers',
            submenuDetail: [
              {
                detailTitle: 'Pebble Stainless-Steel Tumbler - 12 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/e5bfbb40a5c84995b4e61449f8d5ad3f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Two-Tone Stainless-Steel Tumbler - 16 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/80b012580b9047da95b3df1faa7569b6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Recycled Stainless-Steel Tumbler - 16 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/d9135f7222444187b552d86ddd7fed6f.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Recycled Plastic Tumbler - 16 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/e57cd49af88d4534b04d6e7c020634b6.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Iridescent Stainless-Steel Tumbler - 16 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/e6aa4952a7f648ab94800898938e0e66.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Siren Logo Double-Wall Ceramic Tumbler - 12 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/53cd773500f24bed857fa0e6da6d0a9b.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Ice Stainless-Steel Tumbler - 16 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/b7a99a58163043eeae6d92ead70bbea3.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Luster Double-Wall Ceramic Tumbler - 8 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/5c08934fd2b941faa0766e229ffb7e27.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Siren Logo Plastic Hot Cup - 16 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/819df1d59b5946abb7df45ba7d89a933.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Mugs',
        detailImg: 'https://globalassets.starbucks.com/assets/45d52ce7e8ad4a5ab85bb53b245be3a8.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Mugs',
            submenuDetail: [
              {
                detailTitle: 'Concrete Ceramic Mug with Lid - 12 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/45d52ce7e8ad4a5ab85bb53b245be3a8.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Recycled Ceramic Mug - 16 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/8814d83157b5419fa9a98572997d3521.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Water Bottles',
        detailImg: 'https://globalassets.starbucks.com/assets/03e4f843881e431c90c9becc5979e2f0.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Water Bottles',
            submenuDetail: [
              {
                detailTitle: 'Siren Stainless-Steel Water Bottle - 20 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/03e4f843881e431c90c9becc5979e2f0.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Tritan Plastic Water Bottle - 24 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/847b1306b11749d7beeaf35983344cac.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Translucent Glass Water Bottle - 22 fl oz',
                detailImg: 'https://globalassets.starbucks.com/assets/a03326dfdefb4f399b07cdbc22fa3862.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Other',
        detailImg: 'https://globalassets.starbucks.com/assets/f5c6bccc079e45b383ffc282b83db5a4.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Other',
            submenuDetail: [
              {
                detailTitle: 'Reusable Plastic Cold-Cup Straw Pack',
                detailImg: 'https://globalassets.starbucks.com/assets/f5c6bccc079e45b383ffc282b83db5a4.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              },
              {
                detailTitle: 'Small Shopping Bag',
                detailImg: 'https://globalassets.starbucks.com/assets/75252b10ad4f45debf9cff3de9029663.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      }
    ]
  },
  {
    submenuTitle: 'Gift Cards',
    submenuDetail: [
      {
        detailTitle: 'Happy Birthday',
        detailImg: 'https://globalassets.starbucks.com/assets/834dfe8a5d1e4980b87636f4ff62f83a.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Happy Birthday',
            submenuDetail: [
              {
                detailTitle: 'Starbucks Card - Birthday',
                detailImg: 'https://globalassets.starbucks.com/assets/834dfe8a5d1e4980b87636f4ff62f83a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Thank You',
        detailImg: 'https://globalassets.starbucks.com/assets/834dfe8a5d1e4980b87636f4ff62f83a.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Thank You',
            submenuDetail: [
              {
                detailTitle: 'Starbucks Card - Thank You',
                detailImg: 'https://globalassets.starbucks.com/assets/834dfe8a5d1e4980b87636f4ff62f83a.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      },
      {
        detailTitle: 'Traditional',
        detailImg: 'https://globalassets.starbucks.com/assets/9e2617bd4b0744cb940c67b3fad9ca35.jpg?impolicy=1by1_tight_288',
        detailList: [
          {
            submenuTitle: 'Traditional',
            submenuDetail: [
              {
                detailTitle: 'Starbucks Card - Birthday',
                detailImg: 'https://globalassets.starbucks.com/assets/9e2617bd4b0744cb940c67b3fad9ca35.jpg?impolicy=1by1_tight_288',
                detailData: DEFAULT_DETAIL_DATA
              }
            ]
          }
        ]
      }
    ]
  }
];
