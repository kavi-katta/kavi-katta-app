import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  loginForm: FormGroup;
  loginFormSubmitted: boolean;

  constructor(
    private fb: FormBuilder
  ) { }

  get username() {return this.loginForm.get('username')}
  get password() {return this.loginForm.get('password')}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }); 
  }

  onLoginFormSubmit() {
    this.loginFormSubmitted = true;
  }

}
