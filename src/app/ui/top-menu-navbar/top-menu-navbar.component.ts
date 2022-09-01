import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopNavbarLinks, TOP_NAVBAR_LINKS } from '../models/top-menu-navbar.model';

@Component({
  selector: 'app-top-menu-navbar',
  templateUrl: './top-menu-navbar.component.html',
  styleUrls: ['./top-menu-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMenuNavbarComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  links: TopNavbarLinks[] = [
    { context: 'Menu', navigation: TOP_NAVBAR_LINKS.MENU, isActiveRoute: true },
    { context: 'Rewards', navigation: TOP_NAVBAR_LINKS.REWARDS, isActiveRoute: false },
    { context: 'Gift Cards', navigation: TOP_NAVBAR_LINKS.GIFT_CARDS, isActiveRoute: false }
  ];

  ngOnInit(): void {
    this.route.url.subscribe((res) => console.log(res));
  }

  onMenuClick({ navigation }: TopNavbarLinks) {
    console.log(navigation);
  }
}
