import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParishCalendarPage } from './parish-calendar';

@NgModule({
  declarations: [
    ParishCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(ParishCalendarPage),
  ],
})
export class ParishCalendarPageModule {}
