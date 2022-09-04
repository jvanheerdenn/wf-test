import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { SbStore, SbStoreStatus } from './sb.store';
import { TopNavbarLinks, TOP_NAVBAR_LINKS } from './ui/models/top-menu-navbar.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  links = [
    { context: 'Menu', navigation: TOP_NAVBAR_LINKS.MENU, isActiveRoute: false },
    { context: 'Rewards', navigation: TOP_NAVBAR_LINKS.REWARDS, isActiveRoute: false },
    { context: 'Gift Cards', navigation: TOP_NAVBAR_LINKS.GIFT_CARDS, isActiveRoute: false }
  ];
  topNavbarLinks$ = new BehaviorSubject<TopNavbarLinks[]>(this.links);
  status$ = this.sbStore.getStatus$;
  STATUS = SbStoreStatus;

  private readonly destroy$ = new Subject<any>();

  constructor(private readonly router: Router, private readonly sbStore: SbStore) {}

  ngOnInit(): void {
    this.setNavigationActiveRoute();
    this.sbStore.getMenu();
  }

  ngOnDestroy(): void {
    this.destroy$.next('');
  }

  navigateTo(route: string): void {
    if (route.includes(TOP_NAVBAR_LINKS.MENU) && this.router.url.includes(TOP_NAVBAR_LINKS.MENU)) {
      this.sbStore.getMenu();
    }
    this.router.navigate([route]);
  }

  private setNavigationActiveRoute(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.emitActiveNavbarLink(event);
        this.resetSbMenuOptions(event);
      }
    });
  }

  private emitActiveNavbarLink({ url }: NavigationEnd): void {
    this.links.forEach((el: TopNavbarLinks) => {
      el.isActiveRoute = el.navigation === url ? true : false;
    });
    this.topNavbarLinks$.next(this.links);
  }

  private resetSbMenuOptions({ url }: NavigationEnd): void {
    if (url === TOP_NAVBAR_LINKS.MENU) {
      this.sbStore.getMenu();
    }
  }
}
