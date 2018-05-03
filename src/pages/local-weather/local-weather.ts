import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http';

export interface Config {
	foods: string;
}

@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html'
})
export class LocalWeatherPage {

  public config : Config;
  public columns : any;
  public rows = [];
  public opset = 0
  public total: number;
  public term:string
  constructor(public navCtrl:NavController, public navParams:NavParams,private _HTTP   	: HttpClient) {
    this.columns = [
        { prop: 'name' },
        { name: 'Summary' },
        { name: 'Company' }
      ];
    }

  ionViewDidLoad() : void
   {
      this._HTTP
      .get<Config>('../../assets/data/food.json')
      .subscribe((data: any) =>
      { 

        this.total = data.foods.length;
         for (let i = 0; i < 30; i++) {
        this.rows.push(data.foods[this.opset]);
        this.opset++
        if(this.opset>=this.total){
          break;
        }
        
      }

      });
   }

   

   onInput(input){

     this._HTTP
      .get<Config>('../../assets/data/food.json')
      .subscribe((data: any) =>
      {  
        this.rows = data.foods
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
      .get<Config>('../../assets/data/food.json')
      .subscribe((data: any) =>
      {
         for (let i = 0; i < 30; i++) {
        this.rows.push(data.foods[this.opset]);
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
