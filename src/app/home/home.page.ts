import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isCountry: boolean = false;
  isLanguage: boolean = false;

  constructor(private router: Router) {

  }

  state:string;
  city:string;

  country: string;
  language: string;

  url: string = 'https://telesapps.com/';

  searchFacebook() {
    this.url = "https://www.facebook.com/search/str/" + this.city + ', ' + this.state + "/pages-named/residents/present/intersect/"
    if (this.isCountry) {
      this.url += "str/" + this.country + "/pages-named/home-residents/intersect/";
      // this.url = "https://www.facebook.com/search/str/" + this.country + "/pages-named/home-residents/intersect/" +
      //   "str/" + this.location + "/pages-named/residents/present/intersect/";
    }
    if (this.isLanguage) {
      this.url += "str/" + this.language +"/pages-named/speakers/intersect/"
    }

  }

  Test() {
    console.log(this.isCountry);
    console.log(this.isLanguage);
  }

}
