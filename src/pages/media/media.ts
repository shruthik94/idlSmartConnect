import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AddmediaPage } from '../addmedia/addmedia';
import { IDLAlert } from '../../idlSCUtils/idlAlert';
import { MediaDataMgr } from '../../idlSCDataMgrs/mediaDataMgr';
import * as consts from '../../idlSCHelpers/idlSCConstants';

/**
 * Generated class for the MediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

  mediaList;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController, private idlAlert: IDLAlert, public loadingctrl: LoadingController, private mediaDataMgr: MediaDataMgr) {
  }

  ionViewDidLoad() {
    this.mediaList = this.navParams.get("media");
  }

  addnewmedia() {
    const modal = this.modalCtrl.create(AddmediaPage);
    modal.present();
  }

  videoView() {

  }

  videoDelete() {
    let loading = this.loadingctrl.create({
      content: consts.loadingMessages.pleaseWait

    });
    loading.present();
    this.mediaDataMgr.deleteMedia().then((response) => {
      loading.dismiss();
    }).catch((err) => {
      loading.dismiss();
      this.idlAlert.defaultAlert(consts.alertTitles.deleteMedia, err.message, consts.alertButtons.ok);
    })
  }

}
