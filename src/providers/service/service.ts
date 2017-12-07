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
				username: _param.email,
				password: _param.password,
				parishId: _param.parishId
			}).then((user: Kinvey.User) => {
					resolve(user);
			}).catch((error: Kinvey.BaseError) => {
				 reject(error);
			});
		});
	}

}
