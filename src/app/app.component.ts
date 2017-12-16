import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataProvider } from "../providers/data/data";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private dpSubscription: any;

  private rootPage: any;
  private pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private dp: DataProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      let activeUser = dp.getActiveUser();
      if (activeUser) {
        this.rootPage = "HomePage";
        splashScreen.hide();
      } else {
        if (!window.localStorage.getItem("initScreen")) {
          this.rootPage = "WelcomePage";
          splashScreen.hide();
        } else {
          let initScreen = window.localStorage.getItem("initScreen");
          if (window.localStorage.getItem("userType") == "gustUser") {
            dp.gustLogin().then((resp) => {
              this.rootPage = "HomePage";
              splashScreen.hide();
            }, (err) => {
              this.rootPage = "WelcomePage";
              splashScreen.hide();
            });
          } else if (window.localStorage.getItem("userType") == "parishUser") {
            this.rootPage = "LoginPage";
            splashScreen.hide();
          }else{
            this.rootPage = "WelcomePage";
            splashScreen.hide();
          }
        }
      }
    });
  }

  ngOnInit() {
    let contents:any;
    this.dp.getEmitter().subscribe(_sideMenu => {
      this.pages = _sideMenu;
    }, err => {
    });
  }

  openPage(page) {
    if(page.component == "LoginPage"){
      this.dp.logout().then(()=>{
        this.nav.setRoot(page.component);
      },()=>{
        this.nav.setRoot(page.component);
      })
    }else{
      this.nav.setRoot(page.component);
    }
    
  }
}

