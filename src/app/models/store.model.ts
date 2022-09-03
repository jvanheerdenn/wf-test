import { SbStoreStatus } from '../sb.store';
import { Menu, SubmenuDetail } from '../ui/models/menu-config.model';

export interface SbStoreState {
  status: SbStoreStatus;
  menu: Menu[];
  selectedMenu: MenuBase[];
  selectedMenuTitle: string;
  spinner: boolean;
}

export interface MenuBase {
  mainTitle: string;
  subCategories: SubmenuDetail[];
}
