import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OnboardingScreenPage } from '../pages/onboarding-screen/onboarding-screen';
import { CategoriesDataProvider } from '../providers/categories-data/categories-data';
import { HttpClientModule } from '@angular/common/http';
import { CategoryDetailsPage } from '../pages/category-details/category-details';
import { ProductDetailsPage } from '../pages/product-details/product-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage , 
    OnboardingScreenPage , 
    CategoryDetailsPage ,
    ProductDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage , 
    OnboardingScreenPage  , 
    CategoryDetailsPage ,
    ProductDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriesDataProvider
  ]
})
export class AppModule {}
