import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component'

import { NewsService } from './core/news.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdCardModule, MdSidenavModule } from '@angular/material';
import { SourceListComponent } from './source-list/source-list.component';
import { SourceListItemComponent } from './source-list-item/source-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    SourceListComponent,
    SourceListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdSidenavModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
