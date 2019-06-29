import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string;
  public name: FormControl;
  constructor() {
    this.name = new FormControl('Selva', Validators.required);
  }

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

  public setChildTitle(data){
    this.title = data;
  }

  ngOnInit() {
    this.setTitle();
    this.changeTitle();
  }

  register() {
    console.log(this.name.value);
  }
}
