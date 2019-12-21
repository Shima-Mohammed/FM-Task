import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OnboardingScreenPage } from '../pages/onboarding-screen/onboarding-screen';
import { CategoriesDataProvider } from '../providers/categories-data/categories-data';
import { CategoryDetailsPage } from '../pages/category-details/category-details';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = OnboardingScreenPage;
  categoryData;
  @ViewChild(Nav) nav: Nav;

  constructor(private categoriesProvider:CategoriesDataProvider , platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen.hide();
    });
    this.categoriesProvider.getCategoriesData().then(res=>this.categoryData = res)
  }
  openCategoryDetails(category)
  {
    this.nav.push(CategoryDetailsPage,{category:category})
    // this.masterPage = CategoryDetailsPage
  }
}

