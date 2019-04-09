import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import * as consts from '../../idlSCHelpers/idlSCConstants';
import { User } from '../../idlSCModels/User';
import { IDLUserDBMgr } from '../../idlSCDbMgrs/idlSCUserDbMgr';

/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderPage {

  id;
  userName;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userDbMgr: IDLUserDBMgr) {
  }

  ngOnInit() {
  /*  this.id = window.localStorage.getItem(consts.globalVariables.userId);
    this.userDbMgr.getUserById(this.id).then((user: User) => {
      alert(JSON.stringify(user));
      if (user) {
        this.userName = user.userName;
      }
    }).catch((err) => {

    })*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }

  logOutRedirect(){
    this.navCtrl.push(LoginPage);
  }

}
