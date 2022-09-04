import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { menuConfig } from 'src/app/menu.config';
import { Menu } from 'src/app/ui/models/menu-config.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  getMenu = (): Observable<Menu[]> => of(menuConfig);
}
