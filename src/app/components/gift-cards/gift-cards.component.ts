import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftCardsComponent {}
