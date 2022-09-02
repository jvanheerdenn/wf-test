export interface Menu {
  submenuTitle: string;
  submenuDetail: SubmenuDetail[];
}

interface SubmenuDetail {
  detailTitle: string;
  detailImg: string;
  detailList?: Menu[];
}
