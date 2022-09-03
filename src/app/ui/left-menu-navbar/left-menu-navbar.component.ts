import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuBase } from 'src/app/models/store.model';
import { SubmenuDetail } from '../models/menu-config.model';

@Component({
  selector: 'app-left-menu-navbar',
  templateUrl: './left-menu-navbar.component.html',
  styleUrls: ['./left-menu-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuNavbarComponent {
  @Input('menu') menu$!: Observable<MenuBase[]>;
  @Output() emitSelectedMenu = new EventEmitter<string>();

  setSelectedMenu(selectedMenu: SubmenuDetail): void {
    this.emitSelectedMenu.emit(selectedMenu.detailTitle);
  }
}
