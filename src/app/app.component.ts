import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import {UtilityProvider} from "../providers/utility/utility";
import {ServiceProvider} from "../providers/service/service";
import {iActiveUser, iSideMenu, iSideMenuMenus} from "../providers/service/dataBucket";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

 // pages: Array<{title: string, component: any}>;
  pages:Array<iSideMenuMenus>;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private up:UtilityProvider, private sp:ServiceProvider) {
    this.initEmitters();
    this.initializeApp();
  }

  private initEmitters(){
    this.sp.getSideMenuEmitter().subscribe((pSideMenuData:iSideMenu)=>{
      this.pages = pSideMenuData.menus;
    },(pErr)=>{
      this.sp.errorHandler("SERIOUS", pErr);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.up.showLoader();
      this.sp.initKinveyServices().then((pRespUserData:any)=>{
        this.sp.updateSidemenu().then(()=>{
          this.up.hideLoader();
          this.splashScreen.hide();
        });
      });
    });
  }

  openPage(page) {
    this.sp.selectedMenu = page;
    this.nav.setRoot(page.component);
  }
}
