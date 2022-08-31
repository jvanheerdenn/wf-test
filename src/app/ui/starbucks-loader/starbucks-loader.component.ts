import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-starbucks-loader',
  templateUrl: './starbucks-loader.component.html',
  styleUrls: ['./starbucks-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarbucksLoaderComponent {}
