export interface TopNavbarLinks {
  context: string;
  navigation: string;
  isActiveRoute: boolean;
}

export enum TOP_NAVBAR_LINKS {
  MENU = '/menu',
  REWARDS = '/rewards',
  GIFT_CARDS = '/gift-cards'
}
