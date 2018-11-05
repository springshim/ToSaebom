import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Entry } from '../../model/entry';
import { HomePage } from '../home/home';
import { EntryDataServiceProvider } from '../../providers/entry-data-service/entry-data-service';

/**
 * Generated class for the EntryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entry-detail',
  templateUrl: 'entry-detail.html',
})

export class EntryDetailPage {
  private entryTitle: string;
  private entryText: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  private saveEntry() {
    let newEntry = new Entry();
    newEntry.title = this.entryTitle;
    newEntry.text = this.entryText;
    console.log("Now I would save the entry: ", newEntry);
  }
}