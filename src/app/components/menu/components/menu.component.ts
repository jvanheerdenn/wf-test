import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SbStore } from 'src/app/sb.store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  menuTitles$ = this.sbStore.getMenuTitles$;

  constructor(private readonly sbStore: SbStore) {}

  ngOnInit(): void {
    this.initStore();
  }

  private initStore() {
    this.sbStore.getMenu();
  }
}
