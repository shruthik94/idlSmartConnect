import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HeaderPage } from '../pages/header/header';
import { SidebarPage } from '../pages/sidebar/sidebar';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MediaPage } from '../pages/media/media';
import { AddmediaPage } from '../pages/addmedia/addmedia';
import { DevicedetailsPage } from '../pages/devicedetails/devicedetails';
import { Network } from '@ionic-native/network/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IDLUserDataMgr } from '../idlSCDataMgrs/userDataMgr';
import { UserWSMgr } from '../idlSCWebServiceMgrs/userWSMgr';
import { BaseWSMgr } from '../idlSCWebServiceMgrs/baseWSMgr';
import { ConnectivityService } from '../idlSCHelpers/idlSCConnectivityService';
import { IDLAlert } from '../idlSCUtils/idlAlert';
import { IDLBaseDbMgr } from '../idlSCDbMgrs/idlSCBaseDbMgr';

import { MediaDataMgr } from '../idlSCDataMgrs/mediaDataMgr';
import { MediaWSMgr } from '../idlSCWebServiceMgrs/mediaWSMgr';
import { Media } from '../idlSCModels/Media';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { IDLUserDBMgr } from '../idlSCDbMgrs/idlSCUserDbMgr';
import { DeviceDataMgr } from '../idlSCDataMgrs/deviceDataMgr';
import { DeviceWSMgr } from '../idlSCWebServiceMgrs/deviceWSMgr';
import { IDLSCMediaDbMgr } from '../idlSCDbMgrs/idlSCMediaDbMgr';
import { DeviceMediaDataMgr } from '../idlSCDataMgrs/deviceMediaDataMgr';
import { DeviceMediaWSMgr } from '../idlSCWebServiceMgrs/deviceMediaWSMgr';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HeaderPage,
    SidebarPage,
    DashboardPage,
    MediaPage,
    AddmediaPage,
    DevicedetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HeaderPage,
    SidebarPage,
    DashboardPage,
    MediaPage,
    AddmediaPage,
    DevicedetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IDLUserDataMgr,
    UserWSMgr,
    BaseWSMgr,
    ConnectivityService,
    Globalization,
    IDLAlert,
    Network,
    IDLBaseDbMgr,
    IDLUserDBMgr,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaCapture,
    MediaDataMgr,
    MediaWSMgr,
    DeviceDataMgr,
    DeviceWSMgr,
    IDLSCMediaDbMgr,
    DeviceMediaDataMgr,
    DeviceMediaWSMgr,
    Media
  ]
})
export class AppModule {}
