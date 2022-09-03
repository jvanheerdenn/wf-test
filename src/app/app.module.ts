import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

const COMPONENTS = [AppComponent];
const MODULES = [BrowserModule, AppRoutingModule, UiModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
