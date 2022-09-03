import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuBase } from 'src/app/models/store.model';
import { SbStore } from 'src/app/sb.store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  menuTitles$!: Observable<MenuBase[]>;
  getSelectedMenu$ = this.sbStore.getSelectedMenu$;

  constructor(private readonly sbStore: SbStore) {}

  ngOnInit(): void {
    this.initStore();
  }

  defineMenuTitles(selectedMenu = ''): void {
    if (selectedMenu) {
      this.sbStore.getSelectedMenu(selectedMenu);
      this.scrollToTop();
      return;
    }
    this.menuTitles$ = this.sbStore.getMenuTitles$();
  }

  private initStore(): void {
    this.sbStore.getMenu();
    this.defineMenuTitles();
  }

  private scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.scrollTo(0, 0);
      }
    })();
  }
}
