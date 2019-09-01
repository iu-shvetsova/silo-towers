import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { IndicatorService } from './indicator/indicator.service';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IndicatorService],
  bootstrap: [AppComponent]
})

export class AppModule { }
