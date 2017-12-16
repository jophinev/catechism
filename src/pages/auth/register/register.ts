import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { DataProvider } from "../../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {
  private authForm: any;
  private errorMessage: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private dp: DataProvider) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._]+@[A-Za-z0-9._-]+\\.[a-z]{2,3}')])],
      parishId: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])],
      //parishId: ['', Validators.compose([Validators.required, Validators.pattern('^\d{4}')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      cPassword: ['', Validators.compose([Validators.required, Validators.minLength(4)]), this.comparePassword]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  private comparePassword(group: any) {
    return new Promise((resolve, reject) => {
      if (group.parent.getRawValue().cPassword === group.parent.getRawValue().password) {
        //group.parent.controls.cPassword.setErrors({"notUnique":false});
        //group.parent.controls.password.setErrors(null);
        resolve(null);
      } else {
        //group.parent.controls.cPassword.setErrors({"notUnique":true});
        // group.parent.controls.password.setErrors({"notUnique":true});
        resolve({ "notUnique": true });
      }
    })
	}

  private onSubmit(value) {
    this.dp.registerUser(value).then((resp) => {
      this.errorMessage = "successfully registred";
      window.setTimeout(() => {
        this.errorMessage = null;
        this.navCtrl.setRoot("VerifyEmailPage");
      }, 2000);
    }, (error) => {
      //this.resetForm(this.authForm);
      this.errorMessage = error.message;
      window.setTimeout(() => {
        this.errorMessage = null;     
      }, 2000);
    })
  }

  private resetForm(formGroup: any) {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      //control.setErrors(null);
      formGroup.controls[name].value = "";
    });
  }

}
