import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParishNewsPage } from './parish-news';

@NgModule({
  declarations: [
    ParishNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ParishNewsPage),
  ],
})
export class ParishNewsPageModule {}
