import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TopNavbarLinks } from '../models/top-menu-navbar.model';

@Component({
  selector: 'app-top-menu-navbar',
  templateUrl: './top-menu-navbar.component.html',
  styleUrls: ['./top-menu-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMenuNavbarComponent implements OnInit {
  @Input() links$!: Observable<TopNavbarLinks[]>;
  @Output() urlLink = new EventEmitter<string>();

  ngOnInit(): void {
    this.links$.subscribe((val) => console.log(val));
  }
  onMenuClick({ navigation }: TopNavbarLinks) {
    this.urlLink.emit(navigation);
  }
}
