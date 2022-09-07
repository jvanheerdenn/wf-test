import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SbStore } from 'src/app/sb.store';
import { SubmenuDetail } from 'src/app/ui/models/menu-config.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  details$: Observable<SubmenuDetail | null> = this.sbStore.getSelectedDetail$;

  constructor(private readonly sbStore: SbStore) {}

  ngOnInit(): void {
    this.sbStore.getSelectedDetail$.subscribe((val) => console.log(val));
  }
}
