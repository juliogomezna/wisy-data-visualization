import { Component, OnInit } from "@angular/core";
import { FORCAST_ITEMS_CONFIG } from "src/app/common/constants";
import { Item } from "src/app/common/models/item.model";
import Chart from 'chart.js/auto';
import { ForecastService } from "src/app/share/services/forecast.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'forecast-metric-detail',
    templateUrl: './forecast-detail.component.html',
    styleUrls: ['./forecast-detail.component.scss'],
})
export class MetricsDetailComponent implements OnInit{

    currentCityData: Item | null | undefined= null
    dataForecast: Chart | null = null

    constructor(private route: ActivatedRoute, private foreCastService: ForecastService
        ) { }
    
    ngOnInit(): void {
        this.route.paramMap.subscribe(
            (res) => {
                let cityId = res.get('cityId')
               this.currentCityData= cityId ? FORCAST_ITEMS_CONFIG.find(city => city.code == cityId) : null
                if(cityId && this.currentCityData){
                    this.getForecastDetail(cityId)
                }

            })
    }


    getForecastDetail(cityCode: string): void{
        this.foreCastService.getForeCastByCode(cityCode).subscribe(
            infoLocation =>{
                    console.log('response', infoLocation)
                    this.setForecastInfo(infoLocation)
        }, error => {

        })
    }

    setForecastInfo(data: any){
        if(this.currentCityData){
            this.currentCityData.content= data
        }
        
    }   


}