import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesDataProvider } from '../../providers/categories-data/categories-data';
import { CategoryDetailsPage } from '../category-details/category-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categoriesData  ; 

  constructor(private NavCtr:NavController,private categoriesAPI : CategoriesDataProvider,public navCtrl: NavController) {
    this.categoriesAPI.getCategoriesData().then(res=>this.categoriesData = res)
  }

  openCategoryDetails(category)
  {
    this.NavCtr.push(CategoryDetailsPage,{category:category})
  }

}
