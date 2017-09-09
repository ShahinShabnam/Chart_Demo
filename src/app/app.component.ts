import { Component,ViewChild, AfterViewInit,OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule,DxChartComponent, DxSelectBoxModule } from 'devextreme-angular';
import { Service,Month,CountryInfo,EnergyDescription} from '../providers/app.service';
import notify from 'devextreme/ui/notify';
import { Http, HttpModule } from '@angular/http';
import DataSource from 'devextreme/data/data_source';
import query from 'devextreme/data/query';
import 'rxjs/add/operator/toPromise';
import ArrayStore from 'devextreme/data/array_store';
import 'devextreme/data/odata/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DxChartComponent) chart: DxChartComponent
  
  months:Month[];
  chartDataSource: any;  
  posts:any;
 dataName:any;
  dataSource: any[];
  dataValue:any;
  // populationData: Population[];
  name:String;
 ener:any[] = [];
  types: string[] = ["line", "stackedline", "fullstackedline"];
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];
  typess: string[] = ["area", "stackedarea", "fullstackedarea"];
  format = "millions";
      constructor(public myservice: Service,public http :Http) {
        //this.dataSource = myservice.getCompanies();
        this.countriesInfo = myservice.getCountriesInfo();
        this.energySources = myservice.getEnergySources();
        console.log(this.energySources );
        for(let i=0; i<= this.energySources.length; ){
          
             for ( let ener in this.energySources [i]) {
              console.log(ener + " ,"+"ener")
               }
        i++;
      }
      
      
       this.getPosts();
        this.getData();
        this.months = myservice.getMonths();
        console.log(this.months+"month");
        this.chartDataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems'
            },
            postProcess: (results) => { return results[0].DayItems },
            expand: 'DayItems',
            filter: ['Id', '=', 1]
        });
      }
      ngOnInit() {
      
          
             for ( let ener in this.energySources [0]) {
              console.log(ener + " ,"+"ener")
              this.ener.push(ener);
               }
    
    
      }
      customizeText(arg) {
        return "YEAR" + arg.valueText;
    }
    customizeText2(Day) {
      return "Day " + Day.valueText;
  }
    customizeText1(val) {
      return "value"+ val.valueText;
  }
  onValueChanged(e) {
    this.format = e.value === this.types[2] ? "percent" : "millions";
}
customizeTooltipp(arg) {
  return {
      text: arg.valueText
  }
}

getPosts() {
     this.myservice.getJSON()
         .subscribe(
          posts => this.posts = posts,
             
            );}

            sayHello(params) {
              if (params.validationGroup.validate().isValid) {
                notify('Hello ' + this.name + ' !', "info", 2000);
              }
            }
            getData(){

              this.myservice.getData()
              .subscribe(
                dataSource => this.dataSource = dataSource,
                  
                 );}
                 customizeTooltip(arg) {
                  return {
                      text: arg.valueText + '&#176C'
                  };
              }
              customizeText3(arg) {
                  return arg.valueText + '&#176C';
              }
              onValueChangedd(data) {
                  this.chartDataSource.filter(['Id', '=', data.value]);
                  this.chartDataSource.load();
              }
          
  }
