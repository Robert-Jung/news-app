import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-source-list-item',
  template: `
  <button md-raised-button
  (click)= a [routerLink] = "['/articles', name.id]">
    {{ name.name }}
  </button>`,
  styles: [`
    button {
      width: 200px;
      height: 50px;
      text-align: center;
      background-color: #303030;
      color: #D3D3D3;
      border: solid 1px #484848;
    }

    button:hover {
      color: #3399FF;
    }
  `]
})

export class SourceListItemComponent implements OnInit {
  @Input() name;

  constructor() { }

  ngOnInit() {
  }

}
