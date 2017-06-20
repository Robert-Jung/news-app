import { Component, OnInit } from '@angular/core';
import { NewsService } from '../core/news.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  articles: Array<any>;
  defaultSource = 'techcrunch'

  constructor(private newsAPI:NewsService, private route:ActivatedRoute) { }

  ngOnInit() {
      this.newsAPI.getNewsItems(this.defaultSource)
      .subscribe(data => {
      this.articles = data.articles;
    })
  }

}
