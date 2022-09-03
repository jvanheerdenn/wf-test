import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RewardsRoutingModule } from './rewards-routing.module';
import { RewardsComponent } from './rewards.component';

const COMPONENTS = [RewardsComponent];
const MODULES = [CommonModule, RewardsRoutingModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})
export class RewardsModule {}
