import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public name: any;
  public email: any;
  public city: any;

  constructor(private request: RequestService) {
    this.createFormController();
  }

  createFormController(){
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
  }

  register() {
    const newUserInfo = {
      name: this.name.value,
      email: this.email.value,
      city: this.city.value,
    };

    this.request.addNewUser(newUserInfo).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });

    console.log(newUserInfo);
  }

  ngOnInit() {
  }

}
