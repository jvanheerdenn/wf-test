import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GiftCardsRoutingModule } from './gift-cards-routing.module';
import { GiftCardsComponent } from './gift-cards.component';

const COMPONENTS = [GiftCardsComponent];
const MODULES = [CommonModule, GiftCardsRoutingModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})
export class GiftCardsModule {}
