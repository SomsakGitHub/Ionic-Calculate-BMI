import {Component} from "@angular/core";
import {NavController, PopoverController, NavParams} from "ionic-angular";

import {TripsPage} from "../trips/trips";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  todo = []
  sexs

  constructor(public nav: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {
    
    this.sexs = this.navParams.get('sex');

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad HomePage');
    console.log(this.navParams.get('sex'));
  }

  // go to result page
  logForm() {
    var object = {
      sex: this.navParams.get('sex'),
      age: this.todo['age'],
      weight: this.todo['weight'],
      height: this.todo['height'],
      activities: this.todo['activities']
    }
    console.log(object)
    this.nav.push(TripsPage,{Obj: object});
  }

}