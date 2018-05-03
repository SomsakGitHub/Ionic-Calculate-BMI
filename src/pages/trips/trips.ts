import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips

  public obj: any;
  public BMI: any;
  public detail: any;
  public BMR: any;
  public burn: any;
  public water: any;

  constructor(public nav: NavController, public navParams: NavParams) {
    // set sample 
    this.obj = this.navParams.get('Obj');
    this.BMI = this.funBMI();
    this.detail = this.funProcessBMI();
    this.BMR = this.funBMR();
    this.burn = this.funBurn();
    this.water = this.funWater();
  }

  funCalMetter(){
  	var metter = this.obj['height']/100

  	return metter
  }

  funBMI(){
  	var BMI = this.obj['weight']/(this.funCalMetter()*this.funCalMetter())
  
  	return BMI.toFixed(1)
  }

  funProcessBMI(){

  	var Detail

  	if (this.BMI < 18.5) {
  		Detail = "น้ำหนักน้อยกว่ามาตรฐาน";
  	}else if (this.BMI >= 18.5 && this.BMI <= 22.9) {
  		Detail = "ปกติ";
  	}else if (this.BMI >= 23 && this.BMI <= 24.9) {
  		Detail = "อ้วนระดับ 1";
  	}else if (this.BMI >= 25 && this.BMI <= 29.9) {
  		Detail = "อ้วนระดับ 2";
  	}else {
      Detail = "ค่า BMI ไม่ถูกต้อง";
    }

  	return Detail
  }

  funBMR(){
  	var sex = this.obj['sex']
  	var BMR

  	if (sex == "male") {
  		BMR = 66 + (13.7 * this.obj['weight']) + (5 * this.obj['height']) - (6.8 * this.obj['age'])
  	}else {
  		BMR = 665 + (9.6 * this.obj['weight']) + (1.8 * this.obj['height']) - (4.7 * this.obj['age'])
  	}

  	return BMR.toFixed()
  }

  funBurn(){
  	var activities = this.obj['activities']
  	var Burn

  	if (activities == "NoExercise") {
  		Burn = this.funBMR() * 1.2;
  	}else if (activities == "ExerciseLittle") {
  		Burn = this.funBMR() * 1.375;
  	}else if (activities == "ExerciseNormal") {
  		Burn = this.funBMR() * 1.55;
  	}else if (activities == "ExerciseMuch") {
  		Burn = this.funBMR() * 1.725;
  	}else if (activities == "ExerciseVeryMuch") {
  		Burn = this.funBMR() * 1.9;
  	}

  	return Burn.toFixed()
  }

  funWater(){
  	var water = ( this.obj['weight'] * (2.2 * 30) )/2;
  	var realWater = water/1000;

  	return realWater.toFixed(1) 
  }

  homePage(){
    this.nav.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
    // console.log(this.obj);

    // console.log(this.funBMI());
    // console.log(this.funProcessBMI());
    // console.log(this.funBMR());
    // console.log(this.funBurn());
    // console.log(this.funWater());
  }

}
