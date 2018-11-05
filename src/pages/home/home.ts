import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntryDetailPage } from '../entry-detail/entry-detail';
import { Entry } from '../../model/entry';
import { EntryDataServiceProvider } from '../../providers/entry-data-service/entry-data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private entries: Entry[] = [];


  constructor(public navCtrl: NavController, private entryService: EntryDataServiceProvider) {
    this.entries = entryService.getEntries();
  }

  private addEntry() {
    this.navCtrl.push(EntryDetailPage);
  }
}

