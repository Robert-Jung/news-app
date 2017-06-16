import { Component, OnInit } from '@angular/core';
import { NewsService } from '../core/news.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  articles: Array<any>;

  constructor(private newsAPI:NewsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.newsAPI.getNewsItems()
      .subscribe(data => {
        this.articles = data.articles
        console.log(this.articles)
      })
  }

}
