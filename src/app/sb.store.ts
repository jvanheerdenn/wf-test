import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, EMPTY, exhaustMap, filter, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';
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
  selectedMenuTitle: '',
  spinner: false
};

@Injectable({ providedIn: 'root' })
export class SbStore extends ComponentStore<SbStoreState> {
  // SELECTORS
  readonly getMenuTitles$ = (selectedTitle = ''): Observable<MenuBase[]> => {
    if (selectedTitle) {
      return of(
        this.get()
          .menu.map((menuOption: Menu) => menuOption.submenuDetail.find((detail: SubmenuDetail) => detail.detailTitle === selectedTitle))
          .filter((element) => !!element)
          .map(({ detailTitle, detailList }: any) => ({ mainTitle: detailTitle, subCategories: detailList }))
      );
    }

    return of(
      this.get().menu.map(({ submenuTitle, submenuDetail }) => ({
        mainTitle: submenuTitle,
        subCategories: submenuDetail
      }))
    );
  };

  readonly getSelectedMenu$ = this.select(({ selectedMenu }) => selectedMenu);

  // UPDATERS
  readonly setMenu = this.updater((state: SbStoreState, menu: Menu[]) => ({
    ...state,
    menu
  }));
  readonly setStatus = this.updater((state: SbStoreState, status: SbStoreStatus) => ({
    ...state,
    status
  }));
  readonly setSelectedMenu = this.updater((state: SbStoreState, selectedMenu: MenuBase[]) => ({
    ...state,
    selectedMenu
  }));
  readonly setSelectedMenuTitle = this.updater((state: SbStoreState, selectedMenuTitle: string) => ({
    ...state,
    selectedMenuTitle
  }));

  //EFFECTS
  readonly getMenu = this.effect(($trigger) =>
    $trigger.pipe(
      withLatestFrom(this.state$),
      filter(([, state]) => [SbStoreStatus.Init, SbStoreStatus.Error].includes(state.status)),
      tap(() => this.setStatus(SbStoreStatus.Loading)),
      switchMap(() =>
        this.menuService.getMenu().pipe(
          catchError(() => {
            this.setStatus(SbStoreStatus.Error);
            return EMPTY;
          }),
          tap((fullMenu: Menu[]) => this.setMenu(fullMenu)),
          switchMap(() =>
            this.getMenuTitles$().pipe(
              tapResponse(
                (menu: MenuBase[]) => {
                  this.setSelectedMenu(menu);
                  this.setStatus(SbStoreStatus.Loaded);
                },
                () => this.setStatus(SbStoreStatus.Error)
              )
            )
          )
        )
      )
    )
  );

  readonly getSelectedMenu = this.effect<string>(($trigger) =>
    $trigger.pipe(
      withLatestFrom(this.state$),
      filter(([, state]) => [SbStoreStatus.Loaded, SbStoreStatus.Error].includes(state.status)),
      exhaustMap(([selectedMenu]) =>
        this.getMenuTitles$(selectedMenu).pipe(
          tapResponse(
            (menu: MenuBase[]) => {
              if (this.get().selectedMenu.length === 0) {
                this.setSelectedMenu(menu);
                return;
              }
              this.setSelectedMenuTitle(menu[0].mainTitle);
              const newSelectedMenu = menu[0].subCategories.map((el: any) => ({
                mainTitle: el.submenuTitle,
                subCategories: el.submenuDetail
              }));
              this.setSelectedMenu(newSelectedMenu);
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
