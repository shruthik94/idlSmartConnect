import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { IDLAlert } from '../../idlSCUtils/idlAlert';
import { MediaDataMgr } from '../../idlSCDataMgrs/mediaDataMgr';
import * as consts from '../../idlSCHelpers/idlSCConstants';
import { DeviceMediaDataMgr } from '../../idlSCDataMgrs/deviceMediaDataMgr';

/**
 * Generated class for the DevicedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devicedetails',
  templateUrl: 'devicedetails.html',
})
export class DevicedetailsPage {

  //selectedVideoArray = ['video1', 'video2', 'video3'];
  //videoArray = ['video4', 'video5', 'video6'];
  mediaList;
  id;
  mediaData;
  mediaId = [];
  selectedMediaData;
  dataMode1 = [];
  dataMode2 = [];
  mode1: boolean;
  mode2: boolean;
  myStartDateMode1;
  myStartTimeMode1;
  myStartDateMode2;
  myStartTimeMode2;
  myEndDateMode2;
  myEndTimeMode2;

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController,public navParams: NavParams, private idlAlert: IDLAlert, public loadingctrl: LoadingController, private mediaDataMgr: MediaDataMgr, private deviceMediaDataMgr: DeviceMediaDataMgr) {
  }

  ngOnInit() {
    console.log('ionViewDidLoad DevicedetailsPage');
    this.getMedia();
    this.id = this.navParams.get("deviceId");

  }

  getMedia() {
    let loading = this.loadingctrl.create({
      content: consts.loadingMessages.media
    });
    loading.present();
    this.mediaDataMgr.getMedia().then((media) => {
      loading.dismiss();
      this.mediaList = media;
      this.mediaData = this.mediaList.content;
      console.log("Devce details media" + JSON.stringify(this.mediaData));
    }).catch((err) => {
      loading.dismiss();
      this.idlAlert.defaultAlert(consts.alertTitles.deviceDetails, err.message, consts.alertButtons.ok);
    });
  }

  addVideoMode1(videos) {
    this.dataMode1.push(videos)
    console.log("Mode1" + JSON.stringify(this.dataMode1));
  }

  addVideoMode2(videos) {
    this.dataMode2.push(videos)
    console.log("Mode2" + JSON.stringify(this.dataMode2));
  }

  removeVideoMode1(videos){
    let index = this.dataMode1.indexOf(videos);
    if(index > -1){
        this.dataMode1.splice(index, 1);
    }
  }
 
  removeVideoMode2(videos){
    let index = this.dataMode2.indexOf(videos);
    if(index > -1){
        this.dataMode2.splice(index, 1);
    }
  }

  radioCheckedMode1() {
    this.mode1 = true;
    this.mode2 = false;
  }

  radioCheckedMode2() {
    this.mode2 = true;
    this.mode1 = false;
  }

  saveDeviceMedia() {

    var userId = window.localStorage.getItem(consts.globalVariables.userId);
    var uploadedDate = new Date(new Date() + 'UTC');

    var deviceMediaObj = {};

    if (this.mode1 == true && this.mode2 == false) {
      var dateObj = new Date(new Date(this.myStartDateMode1 + ' ' + this.myStartTimeMode1) + 'UTC');
      deviceMediaObj['deviceId'] = this.id;
      deviceMediaObj['userId'] = userId;
      deviceMediaObj['uploadedDate'] = uploadedDate;
      deviceMediaObj['type'] = 'time';
      deviceMediaObj['startDate'] = dateObj;
      this.getMediaIdList(this.dataMode1).then(res => {
        deviceMediaObj['media'] = res;
      }).catch(err => {
        console.log(err)
      })
    } else if (this.mode2 == true && this.mode1 == false) {
      var startDateObj = new Date(new Date(this.myStartDateMode2 + ' ' + this.myStartTimeMode2) + 'UTC');
      var endDateObj = new Date(new Date(this.myEndDateMode2 + ' ' + this.myEndTimeMode2) + 'UTC');
      deviceMediaObj['deviceId'] = this.id;
      deviceMediaObj['userId'] = userId;
      deviceMediaObj['uploadedDate'] = uploadedDate;
      deviceMediaObj['type'] = 'loop';
      deviceMediaObj['startDate'] = startDateObj;
      deviceMediaObj['endDate'] = endDateObj;

      this.getMediaIdList(this.dataMode2).then(res => {
        deviceMediaObj['media'] = res;
      }).catch(err => {
        console.log(err)
      })
    }

    let loading = this.loadingctrl.create({
      content: consts.loadingMessages.pleaseWait
    });
    loading.present();
    this.deviceMediaDataMgr.uploadDeviceMedia(deviceMediaObj).then((deviceMediaData) => {
      loading.dismiss();
      console.log(JSON.stringify(deviceMediaData));
    }).catch((err) => {
      loading.dismiss();
      this.idlAlert.defaultAlert(consts.alertTitles.deviceDetails, err.message, consts.alertButtons.ok);
    })
  }

  /**
   * 
   * @param data 
   */
  getMediaIdList(data) {
    return new Promise((resolve, reject) => {
      let mediaIdList = [];
      data.forEach((value, key, index) => {
        var id = value.ISCM_id;
        console.log("mediaId " + id);
        mediaIdList.push(
          id
        )
      });
      Promise.all(mediaIdList).then(_ => { resolve(mediaIdList) }).catch(err => { reject(err) })
    })
  }
}