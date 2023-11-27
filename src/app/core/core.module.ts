import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardStatComponent } from "./card-stat/card-stat.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [HeaderComponent, CardStatComponent],
    imports: [
        MatToolbarModule, MatButtonModule, MatIconModule,
        CommonModule,RouterModule
    ],
    exports:[HeaderComponent, CardStatComponent]
})
export class CoreModule{

}