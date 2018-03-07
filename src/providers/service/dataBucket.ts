export interface iLevel {
	word: string,
	wordImg: string,
	wordSound: string,
	subWord: string,
	subWordImg: string,
	subWordSound: string,
	descriptions: string
}

export interface iDataUrl {
	url: string,
	word: string
}

export interface iActiveUser {
	email:string,
	username:string,
	userType:string,
	parishId:number
}

export interface iDataBucket {
}

export interface iWord {
	word: string,
	wordImg: string,
	wordSound: string,
	descriptions: string,
	id: Number
}

export interface iSubWord {
	id: Number,
	subWord: string,
	subWordImg: string,
	subWordSound: string
}

export interface iSideMenuMenus{

	title: string, component: any
}

export interface iSideMenu{
	userType:string,
	menus:Array<iSideMenuMenus>
}


export class DataBucket implements iDataBucket {
	public activeUser: iActiveUser = null;
	public sideMenu:iSideMenu = null;

	public selectedMenu:iSideMenuMenus;

	private _activeUser: Object = null;
	private _levelData: Array<iLevel> = null;
	private _wordsArr: Array<iWord> = null;
	private _subWordsArr: Array<iSubWord> = null;

	private _levelNumber: Number = null;
	private _gameConfig: any = null;

	private _clData: Object = {};

	constructor() {
		console.log('Hello DataBucket');
	}

	public get gameConfig() {
		return this._gameConfig;
	}

	public set gameConfig(_userInfo) {
		this._gameConfig = _userInfo;
	}

	/*public get activeUser() {
		return this._activeUser;
	}

	public set activeUser(_userInfo) {
		this._activeUser = _userInfo;
	}*/

	public getLevelNumber() {
		if (!window.localStorage.getItem("levelNumber")) {
			window.localStorage.setItem("levelNumber", "0");
		}
		return Number(window.localStorage.getItem("levelNumber"));
	}

	public setLevelNumber(pLevelNumber) {
		window.localStorage.setItem("levelNumber", String(pLevelNumber));
	}

	public get levelData() {
		return this._levelData;
	}

	public set levelData(_pData) {
		this._levelData = _pData;
	}

	public get wordsArr() {
		return this._wordsArr;
	}

	public set wordsArr(_pData) {
		this._wordsArr = _pData;
	}

	public get subWordsArr() {
		return this._subWordsArr;
	}

	public set subWordsArr(_pData) {
		this._subWordsArr = _pData;
	}

	public getCollectionData(pCollectionName) {
		return this._clData[pCollectionName];
	}

	public setCollectionData(pCollectionName, pData) {
		if (!this._clData[pCollectionName]) {
			this._clData[pCollectionName] = {};
		}
		this._clData[pCollectionName] = pData;
	}



	//https://github.com/heeam/ionic-page-no-lazy-loading-example/blob/master/src/models/photo.interface.ts
	//https://weblogs.asp.net/dwahlin/extending-classes-and-interfaces-using-typescript
	//https://basarat.gitbooks.io/typescript/docs/types/interfaces.html



}