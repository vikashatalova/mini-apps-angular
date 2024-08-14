import { HomeViewModule } from './views/home-view/home-view.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DeletedViewModule } from './views/deleted-view/deleted-view.module';
import { ShellModule } from './core/components/shell/shell.module';
import { ViewModule } from './core/components/view/view.module';
import { FavoriteViewModule } from './views/favorite-view/favorite-view.module';
import { CardsListItemModule } from './core/components/cards-list-item/cards-list-item.module';
import { ColorChromeModule } from 'ngx-color/chrome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeViewModule,
    DeletedViewModule,
    ShellModule,
    ViewModule,
    FavoriteViewModule,
    CardsListItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
