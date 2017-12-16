import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrayersDailyPage } from './prayers-daily';

@NgModule({
  declarations: [
    PrayersDailyPage,
  ],
  imports: [
    IonicPageModule.forChild(PrayersDailyPage),
  ],
})
export class PrayersDailyPageModule {}
