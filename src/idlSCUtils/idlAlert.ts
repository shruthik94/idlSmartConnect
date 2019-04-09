/* @author : IDL Systems India Pvt Ltd, @ copyright 2018
 * @version :
 * @Created by : Shruthi K 
 * @creationDate : 30/03/2019
 * @changeHistory :
 * @desc :
 * date                Modified By                      Description
 * 
*/
import { AlertController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class IDLAlert {

    constructor(private alertCtrl: AlertController) {

    }

    /**
     * method to show the default alert dialog 
     * @param title  defines the title of alert dialog
     * @param subTitle defines the subTitle of alert dialog
     * @param btnName defines the btnName of alert dialog
     */
    defaultAlert(title, subTitle, btnName) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [btnName]
        });
        alert.present();
    }

}