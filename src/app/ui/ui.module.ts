import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuNavbarComponent } from './top-menu-navbar/top-menu-navbar.component';
import { StarbucksLoaderComponent } from './starbucks-loader/starbucks-loader.component';
import { LeftMenuNavbarComponent } from './left-menu-navbar/left-menu-navbar.component';
import { CardComponent } from './card/card.component';
import { MenuSubmenuComponent } from './menu-submenu/menu-submenu.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  TopMenuNavbarComponent,
  StarbucksLoaderComponent,
  LeftMenuNavbarComponent,
  CardComponent,
  MenuSubmenuComponent,
  CustomButtonComponent
];
const MODULES = [CommonModule, ReactiveFormsModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class UiModule {}
