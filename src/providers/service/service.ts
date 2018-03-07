import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Kinvey } from 'kinvey-angular2-sdk';

import { DataBucket } from './dataBucket';

@Injectable()
export class ServiceProvider extends DataBucket {
	private sideMenuEmitter: EventEmitter<any> = new EventEmitter();

	constructor(public http: HttpClient) {
		super();
		console.log('Hello ServiceProvider Provider');
	}
	public initKinveyServices() {
		return new Promise((resolve, reject) => {
			Kinvey.init({
				appKey: 'kid_rkc0iZHwf',
				appSecret: '6a2aa85690e94dc19a5901721de787ba'
			});
			if (this.activeUser) {
				resolve(this.activeUser);
			} else {
				let _actUser = Kinvey.User.getActiveUser();
				if (_actUser && _actUser.data) {
					this.activeUser = _actUser.data[0];
					resolve(this.activeUser);
				} else {
					Kinvey.User.login("jvmbusi@gmail.com", "Farm_2018")
						.then((user: Kinvey.User) => {
							this.activeUser = user.data[0];
							resolve();
						})
						.catch((pErr: Kinvey.BaseError) => {
							this.errorHandler("SERIOUS", pErr);
						});
				}
			}
		})
	}

	public updateSidemenu() {
		return new Promise((resolve, reject) => {
			this.fetchCollectionDataByQuery("sideMenu", { "fieldName": "userType", "value": this.activeUser.userType }).then((pRespMenuData: any) => {
				this.sideMenu = pRespMenuData.data[0];
				this.sideMenuEmitter.emit(this.sideMenu);
				resolve();
			}, (pErr) => {
				this.errorHandler("SERIOUS", pErr);
			})
		})
	}

	public fetchAllCollectionData(pCollectionName, pFresh?: boolean) {
		let cEntities: any;
		return new Promise((resolve, reject) => {
			if (pFresh) {
				if (this.setCollectionData[pCollectionName]) {
					this.setCollectionData[pCollectionName] = null;
				}
			}
			if (this.setCollectionData[pCollectionName]) {
				resolve(this.setCollectionData[pCollectionName]);
			} else {
				Kinvey.DataStore.collection(pCollectionName).find()
					.subscribe((entities: {}[]) => {
						cEntities = entities && entities.length > 0 ? entities : null;
					}, (error) => {
						reject(error);
					}, () => {
						if (cEntities) {
							this.setCollectionData(pCollectionName, cEntities);
						}
						resolve(cEntities);
					})
			}
		})
	}

	public fetchCollectionDataByQuery(pCollectionName: string, pQuery: { "fieldName": string, "value": any }) {
		let cEntities: any;
		const query = new Kinvey.Query();
		query.equalTo(pQuery.fieldName, pQuery.value);
		return new Promise((resolve, reject) => {
			Kinvey.DataStore.collection(pCollectionName).find(query)
				.subscribe((entitie: Array<{}>) => {
					cEntities = entitie ? entitie[0] : null;
				}, (error: any) => {
					reject(error);
				}, () => {
					resolve(cEntities);
				});
		})
	}

	public fetchImages(pObj, pFieldName, pFileName) {
		return new Promise((resolve, reject) => {
			const query = new Kinvey.Query();
			query.equalTo("_filename", pFileName);
			Kinvey.Files.find(query)
				.then((files: any) => {
					pObj[pFieldName] = files[0]._downloadURL
					resolve(pObj);
				})
				.catch((error: Kinvey.BaseError) => {
					reject(error);
				});
		})
	}

	public errorHandler(pErrType, pErr) {
		// TODO update the error code to kinvey
		//this.sp.
	}

	public fetchLevelData(pLevelNumber) {
		return new Promise((resolve, reject) => {
			if (!this.levelData) {
				Kinvey.CustomEndpoint.execute("getLevelData", { "reqType": "get", "level": pLevelNumber })
					.then(function(respData: any) {
						resolve(respData.data);
					}).catch(function(error: any) {
						reject(error);
					});
			} else {
				resolve(this.levelData);
			}
		})
	}

	public fetchImages1(pFileName, pId, _pFieldName) {
		return new Promise((resolve, reject) => {
			const query = new Kinvey.Query();
			query.equalTo("_filename", pFileName);
			Kinvey.Files.find(query)
				.then((files: any) => {
					resolve({ "url": files[0]._downloadURL, "id": pId, "field": _pFieldName });
				})
				.catch((error: Kinvey.BaseError) => {
					reject(error);
				});

			/*Kinvey.Files.download(fileName)
				.then((file: {}) => {
					resolve(file._data);
				})
				.catch((error: Kinvey.BaseError) => {
					reject(error);
				});*/
		})
	}





	public mergeImgSndUrlData(pMainArr, pSubArr, pImgUrl, pSndUrl) {
		for (let i = 0; i < pMainArr.length; i++) {
			for (let j = 0; j < pSubArr.length; j++) {
				if (pMainArr[i].id == pSubArr[j].id) {
					pMainArr[i][pSubArr[j].field] = pSubArr[j].url;
				}
			}
		}
		return pMainArr;
	}

	public getSideMenuEmitter() {
		return this.sideMenuEmitter;
	}

}
