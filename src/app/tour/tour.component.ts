import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  private users: any;

  constructor(private request: RequestService) { }

  ngOnInit() {
    this.request.getUser().subscribe((response) => {
      this.users = response;
    }, (error) => {
      console.log(error);
    });
  }

}
