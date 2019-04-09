import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DevicedetailsPage } from '../devicedetails/devicedetails';
import * as consts from '../../idlSCHelpers/idlSCConstants';
import { DeviceDataMgr } from '../../idlSCDataMgrs/deviceDataMgr';
import { IDLAlert } from '../../idlSCUtils/idlAlert';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  user;
  userName;
  deviceList;

  constructor(public navCtrl: NavController, private idlAlert: IDLAlert, public navParams: NavParams, private deviceDataMgr: DeviceDataMgr, public loadingctrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.user = this.navParams.get("user");
    console.log(JSON.stringify(this.user));
    this.getDeviceList();
  }

  devicedetails() {
    for(var i=0; i<=this.deviceList.length; i++){
      var deviceId = this.deviceList[i].ISCD_id; 
      window.localStorage.setItem(consts.globalVariables.deviceId, deviceId);
      this.navCtrl.push(DevicedetailsPage, {
        deviceId: deviceId
    })
    }
  }

  getDeviceList() {
    let loading = this.loadingctrl.create({
      content: consts.loadingMessages.pleaseWait
    });
    loading.present();
    this.deviceDataMgr.getDevice().then((device) => {
      loading.dismiss();
      this.deviceList = device;
      var deviceData = this.deviceList.content;
      this.deviceList = deviceData;
      console.log(JSON.stringify(this.deviceList));
    }).catch((err) => {
      loading.dismiss();
      this.idlAlert.defaultAlert(consts.alertTitles.dashBoard, err.message, consts.alertButtons.ok);
    })
  }

}
