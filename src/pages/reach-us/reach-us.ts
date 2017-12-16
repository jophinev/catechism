import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "./../../providers/data/data";

/**
 * Generated class for the ReachUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reach-us',
  templateUrl: 'reach-us.html',
})
export class ReachUsPage {
	private dbCl:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private dp:DataProvider) {
  	/*dp.getClData("generalInfo","reachUs").then((resp)=>{

  	},(err)=>{
  		
  	})*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReachUsPage');
  }



}
