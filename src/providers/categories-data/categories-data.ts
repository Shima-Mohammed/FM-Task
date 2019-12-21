import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoriesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesDataProvider {

  categoriesURL:string = "https://5bcce576cf2e850013874767.mockapi.io/task/categories"

  constructor(public http: HttpClient) {
    console.log('Hello CategoriesDataProvider Provider');
  }
  getCategoriesData()
  {
    return new Promise((resolve , reject)=>{
      this.http.get(this.categoriesURL).subscribe(res=>{
        resolve(res)
      })
    })
    
    
  }

}
