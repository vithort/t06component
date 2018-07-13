import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pepperoni: boolean = true;

  constructor(
    public navCtrl: NavController
  ) {

  }

  change() {
    console.log(this.pepperoni);    
  }

}
