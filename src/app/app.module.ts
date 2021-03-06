import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevExtremeModule,DxChartModule,DxDataGridModule,DxSelectBoxModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import {  Service } from '../providers/app.service';
import { FormsModule } from '@angular/forms';
import {Http,HttpModule} from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    DxChartModule,
    FormsModule,
    HttpModule,
    DxDataGridModule,
    DxSelectBoxModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
