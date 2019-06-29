import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  public title: any;
  public amount: any;
  constructor() { }

  ngOnInit() {
    this.title = {name: 'selva'};
    this.amount = 1234.98934493;
  }

  replaceText(){
    this.title = 'button Clicked';
  }

  trimAmount(data) {
    return data.toFixed(2);
  }
}
