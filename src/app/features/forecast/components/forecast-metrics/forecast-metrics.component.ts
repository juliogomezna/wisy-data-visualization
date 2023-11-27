import { Component, OnInit } from "@angular/core";
import { FORCAST_ITEMS_CONFIG } from "src/app/common/constants";
import { Item } from "src/app/common/models/item.model";
import Chart from 'chart.js/auto';
import { ForecastService } from "src/app/share/services/forecast.service";

@Component({
    selector: 'forecast-metrics',
    templateUrl: './forecast-metrics.component.html',
    styleUrls: ['./forecast-metrics.component.scss'],
})
export class MetricsComponent implements OnInit{
    forecastItems: Item[]= FORCAST_ITEMS_CONFIG

    constructor(){}
    
    //https://api.weather.gov/gridpoints/TOP/31,80/forecast
    ngOnInit(): void {
       
    }
}