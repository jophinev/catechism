import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilyGroupsPage } from './family-groups';

@NgModule({
  declarations: [
    FamilyGroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(FamilyGroupsPage),
  ],
})
export class FamilyGroupsPageModule {}
