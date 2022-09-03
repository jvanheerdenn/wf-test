import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from 'src/app/ui/ui.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

const COMPONENTS = [MenuComponent];
const MODULES = [CommonModule, MenuRoutingModule, UiModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})
export class MenuModule {}
