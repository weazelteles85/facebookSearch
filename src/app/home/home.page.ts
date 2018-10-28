import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {

  }

  country:string;
  location:string;
  url:string = 'https://telesapps.com/';

  searchFacebook() {
    this.url = "https://www.facebook.com/search/str/" + this.country + "/pages-named/home-residents/intersect/" +
    "str/"+ this.location + "/pages-named/residents/present/intersect/";

  }

}
