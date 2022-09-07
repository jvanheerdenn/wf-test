import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DetailData } from '../models/details/details.model';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomButtonComponent {
  @Input('details') details!: DetailData | undefined;
}
