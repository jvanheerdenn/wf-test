import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TopNavbarLinks } from '../models/top-menu-navbar.model';

@Component({
  selector: 'app-top-menu-navbar',
  templateUrl: './top-menu-navbar.component.html',
  styleUrls: ['./top-menu-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMenuNavbarComponent {
  @Input() links$!: Observable<TopNavbarLinks[]>;
  @Output() urlLink = new EventEmitter<string>();

  onMenuClick({ navigation }: TopNavbarLinks) {
    this.urlLink.emit(navigation);
  }
}
