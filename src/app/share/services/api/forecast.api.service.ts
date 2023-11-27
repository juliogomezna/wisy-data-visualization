import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ForecastApiService {

    constructor(private httpClient: HttpClient) { }

    getForecastByCityCode(cityCode:string): Observable<any> {
        return this.httpClient.get<any>(`${environment.weatherUrl}${cityCode}/31,80/forecast`, { responseType: 'json' });
    }
    
}