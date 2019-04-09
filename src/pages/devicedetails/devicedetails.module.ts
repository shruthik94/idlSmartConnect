import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicedetailsPage } from './devicedetails';

@NgModule({
  declarations: [
    DevicedetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DevicedetailsPage),
  ],
})
export class DevicedetailsPageModule {}
