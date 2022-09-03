import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menuConfig } from '../menu.config';

@Component({
  selector: 'app-menu-submenu',
  templateUrl: './menu-submenu.component.html',
  styleUrls: ['./menu-submenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSubmenuComponent {
  menuConfig = menuConfig;
}
