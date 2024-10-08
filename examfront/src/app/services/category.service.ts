import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import configUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }
  //load all the cateogries
  public categories() {
    return this._http.get(`${configUrl}/category/`);
  }
  //add new category
  public addCategory(category: any) {
    return this._http.post(`${configUrl}/category/`, category);
  }
}