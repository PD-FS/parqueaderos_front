import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the ParInformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-par-informacion',
  templateUrl: 'par-informacion.html',
})
export class ParInformacionPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private calendar: Calendar
  ) {
  }

  ionViewDidLoad() {
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
    console.log('ionViewDidLoad ParInformacionPage');
  }

}
