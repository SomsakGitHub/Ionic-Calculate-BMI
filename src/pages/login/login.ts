import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    
  }

  // login and go to home page
  login(sex) {
    this.nav.push(HomePage, {sex: sex});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad firstPage');
  }

}
