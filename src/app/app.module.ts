import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PropertyCardModule } from './property-card/property-card.module';
import { PropertiesService } from './shared/properties.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PropertyCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
