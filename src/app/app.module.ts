import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {PrimeNgModule} from './primeng.module';
import {MetricsComponent} from './metrics/metrics.component';
import {HealthComponent} from './health/health.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PrimeNgModule ],
  declarations: [ AppComponent, HelloComponent, MetricsComponent, HealthComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
