import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

const COMPONENTS = [DetailsComponent];
const MODULES = [CommonModule, DetailsRoutingModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})
export class DetailsModule {}
