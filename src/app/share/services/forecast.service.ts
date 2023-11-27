import { Injectable } from "@angular/core";
import { ForecastApiService } from "./api/forecast.api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    constructor(private foreCastApiService: ForecastApiService){}

    getForeCastByCode(cityCode: string): Observable<any>{
        return this.foreCastApiService.getForecastByCityCode(cityCode)
    }
}