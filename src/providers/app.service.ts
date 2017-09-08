import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

export class Population {
    country: string;
    y014: number;
    y1564: number;
    y65: number;
}

let populationData: Population[] = [{
    country: "China",
    y014: 320866959,
    y1564: 853191410,
    y65: 87774113
}, {
    country: "India",
    y014: 340419115,
    y1564: 626520945,
    y65: 47063757
}, {
    country: "United States",
    y014: 58554755,
    y1564: 182172625,
    y65: 34835293
}, {
    country: "Indonesia",
    y014: 68715705,
    y1564: 146014815,
    y65: 10053690
}, {
    country: "Brazil",
    y014: 50278034,
    y1564: 113391494,
    y65: 9190842
}, {
    country: "Russia",
    y014: 26465156,
    y1564: 101123777,
    y65: 18412243
}];
export class Month {
    id: number;
    name: string;
}

let months: Month[] = [{
    id: 1,
    name: "January"
}, {
    id: 2,
    name: "February"
}, {
    id: 3,
    name: "March"
}, {
    id: 4,
    name: "April"
}, {
    id: 5,
    name: "May"
}, {
    id: 6,
    name: "June"
}, {
    id: 7,
    name: "July"
}, {
    id: 8,
    name: "August"
}, {
    id: 9,
    name: "September"
}, {
    id: 10,
    name: "October"
}, {
    id: 11,
    name: "November"
}, {
    id: 12,
    name: "December"
}];

@Injectable()
export class Service {
    // getPopulationData(): Population[] {
    //     return populationData;
    // }
    // getCompanies() {
    //     return companies;
    // }
    getPopulationData(): Population[] {
        return populationData;
    }
    getMonths(): Month[] {
        return months;
    }
    url="../assets/data/product.json";
    urld="../assets/data/data.json";
    constructor(private http: Http) {}
    getJSON(): Observable<any> {
        return this.http.get(this.urld)
        .map(this.extractData)
        .catch(this.handleError);
    }
    
    private extractData(res:Response) {
        let response = res.json();
        console.log(res.json());
        return response || [];
    }
    
    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
       return Observable.throw(errMsg);
    }
    getData(): Observable<any> {
        return this.http.get(this.urld)
        .map(this.extractData)
        .catch(this.handleError);
    }
   
  
}
