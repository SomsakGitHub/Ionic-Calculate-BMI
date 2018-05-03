import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {MyApp} from "./app.component";

import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { ActivitiesPage } from "../pages/activities/activities";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    TripsPage,
    ActivitiesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    TripsPage,
    ActivitiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
  ]
})

export class AppModule {
}
