import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SbStore, SbStoreStatus } from 'src/app/sb.store';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RewardsComponent implements OnInit {
  constructor(private readonly sbStore: SbStore) {}

  ngOnInit(): void {
    this.sbStore.setStatus(SbStoreStatus.Loading);
    setTimeout(() => {
      this.sbStore.setStatus(SbStoreStatus.Loaded);
    }, 10000);
  }
}
