import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { SubmenuDetail } from '../models/menu-config.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input('menu') menuDetails!: SubmenuDetail[];
  @Output() selectedMenu = new EventEmitter<SubmenuDetail>();

  onClick(selectedMenu: SubmenuDetail) {
    this.selectedMenu.emit(selectedMenu);
  }
}
