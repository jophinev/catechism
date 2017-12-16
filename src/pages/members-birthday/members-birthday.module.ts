import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersBirthdayPage } from './members-birthday';

@NgModule({
  declarations: [
    MembersBirthdayPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersBirthdayPage),
  ],
})
export class MembersBirthdayPageModule {}
