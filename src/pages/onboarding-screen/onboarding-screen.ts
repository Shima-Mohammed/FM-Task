import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the OnboardingScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding-screen',
  templateUrl: 'onboarding-screen.html',
})
export class OnboardingScreenPage {
  splashVal = true ; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(()=>{this.splashVal = false},3000)
  }
  skip()
  {
    this.navCtrl.push(HomePage)
  }

}
