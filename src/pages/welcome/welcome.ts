import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DataProvider} from "../../providers/data/data";
import {UtilityProvider} from "../../providers/utility/utility";


@IonicPage()
@Component({
	selector: 'page-welcome',
	templateUrl: 'welcome.html',
})
export class WelcomePage {
	private rememberScreen:boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, private dp:DataProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WelcomePage');
	}

	private onParishUser() {
		if(this.rememberScreen){
			this.updateInitScreen("LoginPage", "parishUser");
		}
		this.navCtrl.setRoot("LoginPage");
	}

	private onGustUser() {
		if(this.rememberScreen){
			this.updateInitScreen("HomePage", "gustUser");
		}
		this.dp.gustLogin().then((resp)=>{
			this.navCtrl.setRoot("HomePage");
		},(error)=>{
			//this.up.showToast(message,duration?,position?)
		})
		
	}

	private updateInitScreen(_p1:string, _p2:string){
		window.localStorage.setItem("initScreen", _p1);
		window.localStorage.setItem("userType", _p2);
	}

}
