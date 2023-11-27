import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { MetricsComponent } from './components/forecast-metrics/forecast-metrics.component';
import { MetricsDetailComponent } from './components/forcast-detail.component.ts/forecast-detail.component';

const routes: Routes = [
    {
        path: '',
        component: MainPage,
        children: [
            {
                path:'',
                component: MetricsComponent
            },{
                path: ':cityId',
                component: MetricsDetailComponent
            }

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForecastRoutingModule { }
