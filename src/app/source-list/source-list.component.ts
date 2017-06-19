import { Component, OnInit } from '@angular/core';
import { NewsService } from '../core/news.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-source-list',
  template: `
    <app-source-list-item
    class="source-list"
    *ngFor="let name of nameList" 
    [name]="name"
    >
    </app-source-list-item>`,
  styles: [`
    .source-list {
      word-wrap: break-word;
    }
  `]
})
export class SourceListComponent implements OnInit {
  nameList: Array<any>;

  constructor(private newsAPI:NewsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.newsAPI.getNewsSource()
      .subscribe(data => {
        this.nameList = data.sources
        console.log(this.nameList)
      })
  }

}
