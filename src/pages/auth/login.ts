import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

//import {RegisterPage} from "./register/register";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //private rootPage: any;
  private authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    //this.rootPage = 'LoginPage';
    this.authForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._]+@[A-Za-z0-9._-]+\\.[a-z]{2,3}')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private onSignin(){
  	this.navCtrl.push("RegisterPage");
  }

  onSubmit(value: any): void {
    if (this.authForm.valid) {
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);

      //this.navCtrl.push(HomePage);

      //pattern('^[a-zA-Z]+$')

      //pattern('[a-zA-Z@.]*')

      //'^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$'

      //Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
    }
  }

  onSignup(){
    this.navCtrl.push("RegisterPage");
  }

  onPassword(){
    this.navCtrl.push("ForgotPasswordPage");
  }
}