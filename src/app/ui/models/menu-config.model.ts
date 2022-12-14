import { DetailData } from './details/details.model';

export interface Menu {
  submenuTitle: string;
  submenuDetail: SubmenuDetail[];
}

export interface SubmenuDetail {
  detailTitle: string;
  detailImg: string;
  detailList?: Menu[];
  detailData?: DetailData;
}

export type UIType = 'dropdown' | 'counter';
