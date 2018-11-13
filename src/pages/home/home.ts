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
  private myDate;

  constructor(public navCtrl: NavController, 
              private entryService: EntryDataServiceProvider) {
    this.entryService.getObservable().subscribe(update => {
    this.entries = entryService.getEntries();


    this.entries.sort(function(a,b){
       if (a.timestamp > b.timestamp) {
        console.log("A is bigger")
        return -1;
      }
      else {
        return 1;
      }   
    })

      console.log(this.entries);
    });

    this.entries = entryService.getEntries();
    this.entries.sort(function(a,b){
       if (a.timestamp > b.timestamp) {
        console.log("A is bigger")
        return -1;
      }
      else {
        return 1;
      }   
    })

}

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

