import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

export class CountryInfo {
    country: string;
    hydro: number;
    oil: number;
    gas: number;
    coal: number;
    nuclear: number;
}

export class EnergyDescription {
    value: string;
    name: string;
}

let energySources: EnergyDescription[] = [
    { value: "hydro", name: "Hydro-electric" },
    { value: "oil", name: "Oil" },
    { value: "gas", name: "Natural gas" },
    { value: "coal", name: "Coal" },
    { value: "nuclear", name: "Nuclear" }
];

let countriesInfo: CountryInfo[]  = [{
    country: "USA",
    hydro: 59.8,
    oil: 937.6,
    gas: 582,
    coal: 564.3,
    nuclear: 187.9
}, {
    country: "China",
    hydro: 74.2,
    oil: 308.6,
    gas: 35.1,
    coal: 956.9,
    nuclear: 11.3
}, {
    country: "Russia",
    hydro: 40,
    oil: 128.5,
    gas: 361.8,
    coal: 105,
    nuclear: 32.4
}, {
    country: "Japan",
    hydro: 22.6,
    oil: 241.5,
    gas: 64.9,
    coal: 120.8,
    nuclear: 64.8
}, {
    country: "India",
    hydro: 19,
    oil: 119.3,
    gas: 28.9,
    coal: 204.8,
    nuclear: 3.8
}, {
    country: "Germany",
    hydro: 6.1,
    oil: 123.6,
    gas: 77.3,
    coal: 85.7,
    nuclear: 37.8
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
    // getPopulationData(): Population[] {
    //     return populationData;
    // }
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
    getEnergySources(): EnergyDescription[] {
        return energySources;
    }
    getCountriesInfo(): CountryInfo[] {
        return countriesInfo;
    }
  
}
