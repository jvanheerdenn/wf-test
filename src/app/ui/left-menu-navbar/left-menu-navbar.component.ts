import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuBase } from 'src/app/models/store.model';

@Component({
  selector: 'app-left-menu-navbar',
  templateUrl: './left-menu-navbar.component.html',
  styleUrls: ['./left-menu-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuNavbarComponent {
  @Input('menu') menu$!: Observable<MenuBase[]>;
}
