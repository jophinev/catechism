import { Injectable } from '@angular/core';

import {ServiceProvider} from "./../service/service";

@Injectable()
export class DataProvider {
	private clUser:any;

  constructor(private sp:ServiceProvider) {
    console.log('Hello DataBucketProvider Provider');
  }

  public registerUser(_param:any){
  	return  new Promise((resolve, reject)=>{
  		this.sp.register(_param).then(resp =>  resolve(resp), err => reject(err));
  	}) 
  }

}
