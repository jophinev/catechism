import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParishAnnouncementsPage } from './parish-announcements';

@NgModule({
  declarations: [
    ParishAnnouncementsPage,
  ],
  imports: [
    IonicPageModule.forChild(ParishAnnouncementsPage),
  ],
})
export class ParishAnnouncementsPageModule {}
