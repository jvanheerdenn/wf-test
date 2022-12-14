import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuBase } from 'src/app/models/store.model';
import { SubmenuDetail } from '../models/menu-config.model';

@Component({
  selector: 'app-menu-submenu',
  templateUrl: './menu-submenu.component.html',
  styleUrls: ['./menu-submenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSubmenuComponent {
  @Input('menu') getSelectedMenu$!: Observable<MenuBase[]>;
  @Output() setMenuItems = new EventEmitter<string>();
  @Output() detailItem = new EventEmitter<SubmenuDetail>();

  setSelectedMenu(selectedMenu: SubmenuDetail) {
    if (selectedMenu.detailData) {
      this.detailItem.emit(selectedMenu);
      return;
    }
    this.setMenuItems.emit(selectedMenu.detailTitle);
  }
}
