import { NgModule } from "@angular/core";
import { MainPage } from "./pages/main/main.page";
import { ForecastRoutingModule } from "./forecast-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import {MatGridListModule} from '@angular/material/grid-list';
import { MetricsComponent } from "./components/forecast-metrics/forecast-metrics.component";
import { MetricsDetailComponent } from "./components/forcast-detail.component.ts/forecast-detail.component";
@NgModule({
    declarations: [
        MainPage,
        MetricsComponent,
        MetricsDetailComponent
    ],
    imports:[
        ForecastRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        MatGridListModule
    ],
    exports:[]
})
export class ForecastModule{

}