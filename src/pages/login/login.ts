import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as idlSCValidationMessage from '../../idlSCHelpers/idlSCValidationMessage';
import * as consts from '../../idlSCHelpers/idlSCConstants';
import { IDLAlert } from '../../idlSCUtils/idlAlert';
import { User } from '../../idlSCModels/User';
import { IDLUserDataMgr } from '../../idlSCDataMgrs/userDataMgr';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  LoginForm: FormGroup;
  validation_messages: any;
  showPass = false;
  type = consts.passwordType.password;
  clearOnEdit: any;

  constructor(public idlUserDataMgr: IDLUserDataMgr, public navCtrl: NavController, public loadingctrl: LoadingController, public navParams: NavParams, public formBuilder: FormBuilder, private idlAlert: IDLAlert) {
    

    this.validation_messages = idlSCValidationMessage.validationMessages;

    this.LoginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginRedirect() {
   if (!this.LoginForm.valid) {
      this.idlAlert.defaultAlert(consts.alertTitles.Login, consts.alertMessages.detailEntry, consts.alertButtons.ok);
    }
    else {
      let loading = this.loadingctrl.create({
        content: consts.loadingMessages.login
      });
      loading.present();
      this.idlUserDataMgr.loginUser(this.LoginForm.value).then((user: User) => {
        loading.dismiss();
        this.navCtrl.push(DashboardPage, {
          user: user
        });
      }).catch((err) => {
        loading.dismiss();
        this.idlAlert.defaultAlert(consts.alertTitles.Login, err.message, consts.alertButtons.ok);
      })
    }
    this.navCtrl.push(DashboardPage);
  }

  /**
   * this function is used show or hide password
   */
  showPassword() {
    if (!this.showPass) {
      this.showPass = true;
      this.type = consts.passwordType.text;
    } else {
      this.showPass = false;
      this.clearOnEdit = true;
      this.type = consts.passwordType.password;
    }
  }

}
