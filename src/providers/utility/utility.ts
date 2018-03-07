import { ToastController, Loading, LoadingController, Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Injectable()
export class UtilityProvider {
    private _toast: any = null;
  private _toastOptions: any;

  private _loader: any = null;
  private _loaderOptions: any = { content: 'Loading...' };

  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController, private menu: MenuController, private events: Events) {
    console.log('Hello UtilityProvider Provider');
  }
  public showToast(message, duration?, position?) {
    if (!duration) {
      duration = 3000
    }
    if (!position) {
      position = "bottom"
    }
    this._toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    this._toast.present();
    this._toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  }

  /* Loader / spinner code start */
  public showLoader() {
    if (this._loader == null) {
      this._loader = this.loadingCtrl.create(this._loaderOptions)
      this._loader.present();
    }
  }

  public hideLoader() {
    if (this._loader != null) {
      this._loader.dismiss();
      this._loader = null;
    }
  }
  public shuffle(_arr) {
    var input = JSON.parse(JSON.stringify(_arr));
    for (var i = input.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var itemAtIndex = input[randomIndex];
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }

}
