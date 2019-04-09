import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MediaPage } from '../media/media';
import * as consts from '../../idlSCHelpers/idlSCConstants';
import { DashboardPage } from '../dashboard/dashboard';
import { MediaDataMgr } from '../../idlSCDataMgrs/mediaDataMgr';
import { IDLAlert } from '../../idlSCUtils/idlAlert';
import { IDLSCMediaDbMgr } from '../../idlSCDbMgrs/idlSCMediaDbMgr';

/**
 * Generated class for the SidebarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sidebar',
  templateUrl: 'sidebar.html',
})
export class SidebarPage {

  mediaList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private idlAlert: IDLAlert, public loadingctrl: LoadingController, private mediaDataMgr: MediaDataMgr, private mediaDbMgr: IDLSCMediaDbMgr) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidebarPage');
  }

  mediadetails() {
    let loading = this.loadingctrl.create({
      content: consts.loadingMessages.media

    });
    loading.present();
    //alert("userId "+ window.localStorage.getItem(consts.globalVariables.userId));
    this.mediaDataMgr.getMedia().then((media) => {
      loading.dismiss();
      this.mediaList = media;

      var mediaData = this.mediaList.content;
      this.navCtrl.push(MediaPage, { media: mediaData })
      console.log(mediaData);

    }).catch((err) => {
      loading.dismiss();
      this.idlAlert.defaultAlert(consts.alertTitles.getMedia, err.message, consts.alertButtons.ok);
    })
  }

  devicelist() {
    this.navCtrl.push(DashboardPage);
  }
}

