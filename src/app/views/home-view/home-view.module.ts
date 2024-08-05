import { ViewModule } from './../../core/components/view/view.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';
import { HomeViewRoutingModule } from './home-view-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsListItemModule } from 'src/app/core/components/cards-list-item/cards-list-item.module';


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
        CardsListItemModule
    ],
})
export class HomeViewModule {}
