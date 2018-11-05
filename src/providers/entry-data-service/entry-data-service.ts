import { Injectable } from '@angular/core';
import { Entry } from '../../model/entry';

@Injectable()
export class EntryDataServiceProvider {
  private entries:Entry[] = [];
  
  constructor(  ) { 
    this.loadFakeEntries();
  }
  
  public getEntries():Entry[] {
    let entriesClone = JSON.parse(JSON.stringify(this.entries));
    return entriesClone;
  }
  
  private loadFakeEntries() {
    this.entries = [
      {
        title: "Latest Entry",
        text: "Today I went to my favorite class, SI 669. It was super great."
      },
      {
        title: "Earlier Entry",
        text: "I can't wait for Halloween! I'm going to eat so much candy!!!"
      },
      {
        title: "First Entry",
        text: "OMG Project 1 was the absolute suck!"
      }
    ];
  }
}