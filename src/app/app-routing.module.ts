import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { SourceDetailPageComponent } from './source-detail-page/source-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent
  },
  {
    path: 'articles/:id',
    component: SourceDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
