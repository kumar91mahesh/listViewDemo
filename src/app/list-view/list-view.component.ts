import {Component, OnInit} from '@angular/core';
import {ListViewService} from './list-view.service';
// import 'rxjs';
import {Observable} from 'rxjs/Observable';

import {IntervalObservable} from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  // providers: [ListViewService]
})
export class ListViewComponent implements OnInit {
  public listData: any = [];
  public deepCopy: any = [];
  public searchQuery = "";
  public dataLength = 0;

  constructor(private _listViewService: ListViewService) {
    this.searchQuery = "";
  }

  ngOnInit() {
    this.getData();
    // addData()
  }

  public getData() {
    this.listData = this._listViewService.getDetail();
    this.dataLength = this.listData.length;
    this.deepCopy = Object.assign([], this.listData);
    this.addRows();
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  public timer(_self, val) {
    var newItem = {
      name: _self.deepCopy[val].name,
      joining_date: this._listViewService.getNextDate(_self.deepCopy[val].joining_date),
      age: this._listViewService.reverseNumber(_self.deepCopy[val].age)
    };
    this.listData.push(newItem);
    console.log(this.listData);
  }

  addRows() {
    // debugger;
    var _self = this;
    // var val = 0;
    let count = 0;
    const interval = window.setInterval(() => {
      _self.timer(_self, count);
      console.log(count);
      count++;
      if (count >= 4) {
        window.clearInterval(interval);
      }
    }, 60000);
  }

  sortByDate() {
    this.listData.sort(function (a, b) {
      var date1 = a.joining_date.split("/");
      var date2 = b.joining_date.split("/");
      var dateA = new Date(date1[2], date1[1] - 1, date1[0], 0, 0, 0);
      var dateB = new Date(date2[2], date2[1] - 1, date2[0], 0, 0, 0);
      return dateA > dateB ? 1 : -1;
    });
  }
}
