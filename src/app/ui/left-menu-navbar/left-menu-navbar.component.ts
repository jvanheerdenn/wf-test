import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menuConfig } from '../menu.config';

@Component({
  selector: 'app-left-menu-navbar',
  templateUrl: './left-menu-navbar.component.html',
  styleUrls: ['./left-menu-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuNavbarComponent {
  menuConfig = menuConfig;
}
