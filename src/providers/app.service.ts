import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// export class Population {
//     arg: number;
//     val: number;
// }

// let populationData: Population[] = [{
//     arg: 1950,
//     val: 2525778669
// }, {
//     arg: 1960,
//     val: 3026002942
// }, {
//     arg: 1970,
//     val: 3691172616
// }, {
//     arg: 1980,
//     val: 4449048798
// }, {
//     arg: 1990,
//     val: 5320816667
// }, {
//     arg: 2000,
//     val: 6127700428
// }, {
//     arg: 2010,
//     val: 6916183482
// }];

@Injectable()
export class Service {
    // getPopulationData(): Population[] {
    //     return populationData;
    // }
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
}
