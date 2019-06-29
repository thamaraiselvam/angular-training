import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() titleEvent = new EventEmitter<string>();
  @Input() master: string;

  private title: string;
  constructor() { }

  ngOnInit() {
      this.title = 'hi';
  }

  passData() {
    this.titleEvent.emit(this.title);
  }

}
