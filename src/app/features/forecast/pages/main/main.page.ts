import { Component, OnInit } from "@angular/core";
import { FORCAST_ITEMS_CONFIG } from "src/app/common/constants";
import { Item } from "src/app/common/models/item.model";
import Chart from 'chart.js/auto';

@Component({
    selector: 'forecast-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    

    ngOnInit(): void {
    }
    
}