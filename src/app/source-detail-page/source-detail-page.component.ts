import { Component, OnInit } from '@angular/core';
import { NewsService } from '../core/news.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-source-detail-page',
  templateUrl: './source-detail-page.component.html',
  styleUrls: ['./source-detail-page.component.css']
})
export class SourceDetailPageComponent implements OnInit {

  articles: Array<any>;
  id: string;

  constructor(private newsAPI:NewsService, private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.id = params['id'];
      this.renderDetails(this.id);
    });
  }

  renderDetails(id: string) {
      console.log(id)
      this.newsAPI.getNewsItems(id)
      .subscribe(data => {
      this.articles = data.articles;
    })
  }

}
