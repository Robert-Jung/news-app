import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component'

import { NewsService } from './core/news.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdSidenavModule, MdGridListModule } from '@angular/material';
import { SourceListComponent } from './source-list/source-list.component';
import { SourceListItemComponent } from './source-list-item/source-list-item.component';
import { SourceDetailPageComponent } from './source-detail-page/source-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    SourceListComponent,
    SourceListItemComponent,
    SourceDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdGridListModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
