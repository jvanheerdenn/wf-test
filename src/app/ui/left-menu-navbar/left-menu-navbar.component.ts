import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from '../models/menu-config.model';

@Component({
  selector: 'app-left-menu-navbar',
  templateUrl: './left-menu-navbar.component.html',
  styleUrls: ['./left-menu-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuNavbarComponent {
  menuConfig: Menu[] = [
    {
      title: 'Drinks',
      subtitles: ['Hot Coffees', 'Hot Teas', 'Hot Drinks', 'Frappuccino® Blended Beverages', 'Cold Coffees', 'Iced Teas', 'Cold Drinks']
    },
    {
      title: 'Food',
      subtitles: ['Hot Breakfast', 'Bakery', 'Lunch', 'Snacks & Sweets', 'Oatmeal & Yogurt']
    },
    {
      title: 'At Home Coffee',
      subtitles: ['Whole Bean', 'VIA® Instant']
    },
    {
      title: 'Merchandise',
      subtitles: ['Cold Cups', 'Tumblers', 'Mugs', 'Water Bottles', 'Other']
    },
    {
      title: 'Gift Cards',
      subtitles: ['Happy Birthday', 'Thank You', 'Traditional']
    }
  ];
}
