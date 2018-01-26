import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from "@angular/router";
@Injectable()
export class ListViewService {
  public url;
  public data;

  constructor(private http: Http,
              private _router: Router,
              private _route: ActivatedRoute) {
    this.url = 'https://api.jsonbin.io/b/5a32a5ee2b56fc12b09ad501';
    this.data = [
      {

        name: 'Jon',
        joining_date: '23/10/2015',
        age: 23
      },
      {
        name: 'Viki',
        joining_date: '24/01/2015',
        age: 20
      },
      {
        name: 'Abc',
        joining_date: '25/10/2015',
        age: 43
      },
      {
        name: 'XYZ',
        joining_date: '28/10/2015',
        age: 21
      }
    ];
  }


  public getDetail() {
    return this.data;

  }

  public getNextDate(dateStr) {
    var spiltDate = dateStr.split("/");
    var nextDate = new Date(new Date(spiltDate[2], spiltDate[1] - 1, spiltDate[0], 0, 0, 0).getTime() + 24 * 60 * 60 * 1000);
    var day = nextDate.getDate()
    var month = nextDate.getMonth() + 1
    var year = nextDate.getFullYear();
    return day + "/" + month + "/" + year;
  }

  public reverseNumber(n) {
    n = n + "";
    return n.split("").reverse().join("");
  }

}
