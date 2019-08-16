import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {PrimeNgModule} from './primeng.module';
import {MetricsComponent} from './metrics/metrics.component';
import {HealthComponent} from './health/health.component';
import {RemoteComponent} from './remote/remote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PrimeNgModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, MetricsComponent, HealthComponent, RemoteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
