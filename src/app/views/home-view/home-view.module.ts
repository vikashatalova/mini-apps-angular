import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';
import { HomeViewRoutingModule } from './home-view-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewModule } from './../../core/components/view/view.module';
import { CardsListItemModule } from 'src/app/core/components/cards-list-item/cards-list-item.module';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorChromeModule } from 'ngx-color/chrome';

@NgModule({
    declarations: [
        HomeViewComponent
    ],
    imports: [
        CommonModule,
        HomeViewRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ViewModule,
        CardsListItemModule,
        ColorSketchModule,
        ColorChromeModule
    ],
    schemas: []
})
export class HomeViewModule {}
