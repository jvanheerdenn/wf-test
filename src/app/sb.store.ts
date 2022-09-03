import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { filter, Observable, switchMap, tap } from 'rxjs';
import { MenuService } from './components/menu/services/menu.service';
import { MenuBase, SbStoreState } from './models/store.model';
import { Menu, SubmenuDetail } from './ui/models/menu-config.model';

export enum SbStoreStatus {
  Init = 'Init',
  Loading = 'Loading',
  Loaded = 'Loaded',
  Error = 'Error'
}

const defaultState: SbStoreState = {
  status: SbStoreStatus.Init,
  menu: [],
  selectedMenu: [],
  spinner: false
};

@Injectable({ providedIn: 'root' })
export class SbStore extends ComponentStore<SbStoreState> {
  // SELECTORS
  readonly getMenuTitles$ = (selectedTitle = ''): Observable<MenuBase[]> => {
    if (selectedTitle) {
      return this.select(({ menu }) =>
        menu
          .map((menuOption: Menu) => menuOption.submenuDetail.find((detail: SubmenuDetail) => detail.detailTitle === selectedTitle))
          .filter((element) => !!element)
          .map(({ detailTitle, detailList }: any) => ({ mainTitle: detailTitle, subCategories: detailList }))
      );
    }

    return this.select(({ menu }) =>
      menu.map(({ submenuTitle, submenuDetail }) => ({
        mainTitle: submenuTitle,
        subCategories: submenuDetail
      }))
    );
  };

  // UPDATERS
  readonly setMenu = this.updater((state: SbStoreState, menu: Menu[]) => ({
    ...state,
    menu
  }));
  readonly setStatus = this.updater((state: SbStoreState, status: SbStoreStatus) => ({
    ...state,
    status
  }));

  //EFFECTS
  readonly getMenu = this.effect(($trigger) =>
    $trigger.pipe(
      filter(() => this.get().status === SbStoreStatus.Init),
      tap(() => this.setStatus(SbStoreStatus.Loading)),
      switchMap(() =>
        this.menuService.getMenu().pipe(
          tapResponse(
            (menu: Menu[]) => {
              this.setMenu(menu);
              this.setStatus(SbStoreStatus.Loaded);
            },
            () => this.setStatus(SbStoreStatus.Error)
          )
        )
      )
    )
  );

  constructor(private readonly menuService: MenuService) {
    super(defaultState);
  }
}
