import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

export interface Config {
	activities: string;
}

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

	public config : Config;
  public columns : any;
  public rows = [];
  public opset = 0
  public total: number;
  public term:string

  constructor(public navCtrl: NavController, public navParams: NavParams, private _HTTP   	: HttpClient) {

  	this.columns = [
        { prop: 'name' },
        { name: 'Summary' }
      ];

  }

  ionViewDidLoad() : void
   {
      this._HTTP
      .get<Config>('../../assets/data/activities.json')
      .subscribe((data: any) =>
      { 

        this.total = data.activities.length;
         for (let i = 0; i < 30; i++) {
        this.rows.push(data.activities[this.opset]);
        this.opset++
        if(this.opset>=this.total){
          break;
        }
        
      }

      });
   }

   

   onInput(input){

     this._HTTP
      .get<Config>('../../assets/data/activities.json')
      .subscribe((data: any) =>
      {  
        this.rows = data.activities
             var q = input.target.value;

     if (q == '' || q==null) {
       this.opset=0
       this.rows=[]
      this.ionViewDidLoad()
      return
    }

    this.rows= this.rows.filter((v) => {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })


      });


   }

   doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this._HTTP
      .get<Config>('../../assets/data/activities.json')
      .subscribe((data: any) =>
      {
         for (let i = 0; i < 30; i++) {
        this.rows.push(data.activities[this.opset]);
        this.opset++
        if(this.opset>=this.total){
          break;
        }
      }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 200);
  }

}
