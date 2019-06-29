import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string;

  constructor() {}

  private setTitle() {
    this.title = 'Hello World';
  }

  private changeTitle() {
    setTimeout(() => {
      this.title = 'Title Changed';
    }, 2000);
  }

  public getTitle() {
    return this.title;
  }

  ngOnInit() {
    this.setTitle();
    this.changeTitle();
  }
}
