import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';

/**
 * Generated class for the CategoryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-details',
  templateUrl: 'category-details.html',
})
export class CategoryDetailsPage {
  category;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.category=this.navParams.get('category');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryDetailsPage');
  }
  openProductDetails(product)
  {
    const modal = this.modalCtrl.create(ProductDetailsPage,{product:product})
    modal.present();
  }
}
