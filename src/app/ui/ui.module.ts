import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuNavbarComponent } from './top-menu-navbar/top-menu-navbar.component';
import { StarbucksLoaderComponent } from './starbucks-loader/starbucks-loader.component';

@NgModule({
  declarations: [TopMenuNavbarComponent, StarbucksLoaderComponent],
  imports: [CommonModule],
  exports: [TopMenuNavbarComponent, StarbucksLoaderComponent]
})
export class UiModule {}
