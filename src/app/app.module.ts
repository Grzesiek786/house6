import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import localePL from '@angular/common/locales/pl';

import { AppComponent } from './app.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { HousesDashboardComponent } from './components/houses-dashboard/houses-dashboard.component';
import { ColorsStatusDirective } from './shares/color-status.directive';
import { LocaleCurrencyPipe } from './shares/locale-currency.pipe';
import { DialogComponent } from './components/dialog/dialog.component';
import { PopupPhotoComponent } from './components/dialog/popup-photo/popup-photo.component';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    HouseCardComponent,
    HousesDashboardComponent,
    ColorsStatusDirective,
    LocaleCurrencyPipe,
    DialogComponent,
    PopupPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
