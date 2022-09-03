import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SbStore } from 'src/app/sb.store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  menuTitles$!: Observable<any>;

  constructor(private readonly sbStore: SbStore) {}

  ngOnInit(): void {
    this.initStore();
  }

  defineMenuTitles(selectedMenu = ''): void {
    if (selectedMenu) {
      this.menuTitles$ = this.sbStore.getMenuTitles$(selectedMenu);
      return;
    }
    this.menuTitles$ = this.sbStore.getMenuTitles$();
  }

  private initStore(): void {
    this.sbStore.getMenu();
    this.defineMenuTitles();
  }
}
