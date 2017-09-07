import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';
import { Service } from '../providers/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts:any;
  
      constructor(public myservice: Service) {
        this.getPosts();
      }
      customizeText(arg) {
        return "ID" + arg.valueText;
    }
    customizeText1(val) {
      return  val.valueText;
  }
getPosts() {
     this.myservice.getJSON()
         .subscribe(
             posts => this.posts = posts,
             
            );}
          
  }
