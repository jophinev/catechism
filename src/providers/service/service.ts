import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Kinvey } from 'kinvey-angular2-sdk';

@Injectable()
export class ServiceProvider {

	constructor(private http: HttpClient) {
		console.log('Hello DataServiceProvider Provider');
		this.init();
	}

	private init() {
		Kinvey.init({
			appKey: 'kid_ryMQIU9lM',
			appSecret: '543a8f6f8f6941efb3f6b17bf0154a7d'
		});
	}

	public register(_param: any) {
		return new Promise((resolve, reject) => {
			Kinvey.User.signup({
				email: _param.email,
				username: _param.email,
				password: _param.password
			}).then((user: Kinvey.User) => {
				resolve(user.data);
			}).catch((error: Kinvey.BaseError) => {
				reject(error);
			});
		});
	}

	public login(_param: any) {
		return new Promise((resolve, reject) => {
			Kinvey.User.login(_param.email, _param.password)
				.then((user: Kinvey.User) => {
					resolve(user.data);
				})
				.catch((error: Kinvey.BaseError) => {
					reject(error);
				});
		})
	}

	public logout(){
		return new Promise((resolve, reject)=>{
			Kinvey.User.logout().then(()=>{
				resolve();
			}, (error)=>{
				reject();
			})
		})
	}

	public getActiveUser() {
		if (Kinvey && Kinvey.User && Kinvey.User.getActiveUser()) {
			return Kinvey.User.getActiveUser().data;
		} else {
			return null;
		}
	}

	public getAllClData(_clName) {
		let cEntities: any;
		return new Promise((resolve, reject) => {
			Kinvey.DataStore.collection(_clName).find()
				.subscribe((entities: {}[]) => {
					cEntities = entities && entities.length > 0 ? entities : null;
				}, (error) => {
					reject(error);
				}, () => {
					resolve(cEntities);
				})
		})
	}
}