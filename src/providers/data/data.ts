import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServiceProvider } from "./../service/service";

@Injectable()
export class DataProvider {
  private dispatcher: EventEmitter<any> = new EventEmitter();

  private clUser: any;
  private clMenus: any;
  private gustCred: {}

  private clData: any;

  public sideMenus: any;
  //public sideMenus: Array<{ title: string, component: any }>;

  constructor(private sp: ServiceProvider) {
    console.log('Hello DataBucketProvider Provider');
  }

  public registerUser(_param: any) {
    return new Promise((resolve, reject) => {
      this.sp.register(_param).then((resp: any) => {
        this.clUser = resp;
        this.updateSideMenu();
        resolve(resp)
      }, err => reject(err));
    })
  }

  public gustLogin() {
    return new Promise((resolve, reject) => {
      this.login({ email: "jvmbusi@gmail.com", password: "LourdeMC_2017" }).then((resp) => {
        resolve(resp);
      }, err => reject(err));
    })
  }

  public logout(){
    return new Promise((resolve, reject) => {
      this.sp.logout().then(()=>{
        resolve();
      }, ()=>{
        reject();
      })
    })
  }

  public login(_param) {
    return new Promise((resolve, reject) => {
      this.sp.login(_param).then((resp: any) => {
        this.clUser = resp;
        this.updateSideMenu();
        resolve(resp);
      }, err => reject(err));
    })
  }

  public getActiveUser() {
    if(!this.clUser || !this.clUser._id){
      this.clUser = this.sp.getActiveUser();
    }
    this.updateSideMenu();
    return this.clUser;
  }

  private updateSideMenu() {
    if(this.clMenus){
      this.dispatcher.emit(this.getObjectById(this.clMenus, "userType", this.clUser.userType, "menus"));
    }else{
      this.sp.getAllClData("sideMenus").then((resp) => {
        this.clMenus = resp;
        this.dispatcher.emit(this.getObjectById(this.clMenus, "userType", this.clUser.userType, "menus"));
      }, (err) => {});
    }
  }

  public getObjectById(_arrObj, _attrName, _objName, _returnObj): Object {
    let _temp: Object = {};
    _arrObj.find((element, index) => {
      if (element[_attrName] == _objName) {
        _temp = JSON.parse(JSON.stringify(element));
      }
    })
    return _temp[_returnObj];
  }

  public getEmitter() {
    return this.dispatcher;
  }


/*if (this.clUser.userType == "GUST") {
      this.sideMenus = [
        { "title": "Our Parish", "component": "OurParishPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Parish News", "component": "ParishNewsPage" },
        { "title": "Parish Timings", "component": "ParishTimingsPage" },
        { "title": "Parish Announcements", "component": "ParishAnnouncementsPage" },
        { "title": "Parish Calendar", "component": "ParishCalendarPage" },
        { "title": "Family Groups", "component": "FamilyGroupsPage" },
        { "title": "Members Birthday", "component": "MembersBirthdayPage" },
        { "title": "Prayers for Daily", "component": "PrayersDailyPage" },
        { "title": "Reach Us", "component": "ReachUsPage" },
        { "title": "Signin", "component": "LoginPage" }

        { "title": "Our Parish", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Parish News", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Parish Timings", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Parish Announcements", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Parish Calendar", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Family Groups", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Members Birthday", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Prayers for Daily", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Reach Us", "component": "GeneralPage", "clN":"generalInfo", "pN":"ourParish" },
        { "title": "Signin", "component": "LoginPage" }
      ];
    }else{
      this.sideMenus = [
        { title: 'Switch User', component: "UsersPage" },
        { title: "Teacher's Message", component: "TeachersMsgPage" },
        { title: "Principal's Message", component: "PrincipalsMsgPage" },
        { title: 'Classmates', component: "ClassmatesPage" },
        
        { title: 'Noties', component: "NotiesPage" },
        { title: 'Parish Bullatin', component: "BullatinPage" },
        { title: 'About Parish', component: "AboutParishPage" },
        { title: 'Signout', component: "LogoutPage" }
      ];
    }*/


    /*public getClData(_clName, _pageName) {
    return new Promise((resolve, reject) => {
      if (this.clData && this.clData[_clName]) {
        resolve(this.clData[_clName][_pageName]);
      } else {
        this.sp.getAllClData(_clName).then((reps) => {

        }, (err) => {

        })
      }

    });
  }*/

  /*
public getSideMenus() {
    return new Promise((resolve, reject) => {
      this.sp.getAllClData("sideMenus").then((resp) => {
        this.clMenus = resp;
        this.sideMenus = this.getObjectById(this.clMenus, "userType", this.clUser.userType, "menus");
        resolve(resp);
      }, (err) => reject(err));
    })
  }

  public getActiveUser1() {
    return new Promise((resolve, reject) => {
      if (this.clUser && this.clUser._id && this.sideMenus) {
        resolve(this.clUser);
      } else if (this.sp.getActiveUser()) {
        this.clUser = this.sp.getActiveUser();
        if (!this.sideMenus) {
          this.getSideMenu().then((resp) => {
            resolve(this.clUser);
          }, (err) => reject(err));
        } else {
          resolve(this.clUser);
        }
      } else {
        reject(null);
      }
    });
  }

  private getSideMenu() {
    return new Promise((resolve, reject) => {
      this.sp.getAllClData("sideMenus").then((resp) => {
        this.clMenus = resp;
        this.sideMenus = this.getObjectById(this.clMenus, "userType", this.clUser.userType, "menus");
        resolve(resp);
      }, (err) => reject(err));
    })
  }

  */

}
