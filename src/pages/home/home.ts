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

  constructor(public navCtrl: NavController, 
              private entryService: EntryDataServiceProvider) {
    this.entryService.getObservable().subscribe(update => {
      this.entries = entryService.getEntries();
      console.log(this.entries);
    });
    this.entries = entryService.getEntries();
  }

/* Simple way to get the updated data
  public ionViewWillEnter() {
    this.entries = this.entryService.getEntries();
  }
*/

  private addEntry() {
  	// console.log("hi there")
    this.navCtrl.push(EntryDetailPage);
  }

  private editEntry(entryID: number) {
    console.log("editing entry ", entryID);
    this.navCtrl.push(EntryDetailPage, {"entryID": entryID});
  }

  private deleteEntry(entryID: number) {
    console.log("deleting entry", entryID);
    this.entryService.removeEntry(entryID);
  }

}

