import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable, Subject } from 'rxjs';
import { MenuBase } from 'src/app/models/store.model';
import { SbStore } from 'src/app/sb.store';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuard implements CanActivate {
  private readonly emitter: Subject<any> = new Subject();

  constructor(private readonly sbStore: SbStore, private readonly router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.sbStore.getSelectedMenu$.pipe(
      map((val: MenuBase[]) => {
        if (val.length === 0) {
          this.router.navigate(['/menu']);
          return false;
        }
        return true;
      })
    );
  }
}
