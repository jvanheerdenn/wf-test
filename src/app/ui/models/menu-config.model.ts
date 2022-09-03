export interface Menu {
  submenuTitle: string;
  submenuDetail: SubmenuDetail[];
}

export interface SubmenuDetail {
  detailTitle: string;
  detailImg: string;
  detailList?: Menu[];
  calories?: number;
}
