import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'da95296f6a3d45a9b93d7fd7cc1756a8';

const DATA_PART_1 = 'https://newsapi.org/v2/everything?' +
                  'q=Apple&from=';
const DATA_PART_2 = '&sortBy=popularity' + '&apiKey=' + API;
                  
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  _http: HttpClient;
  dataArray: Array<any>;
  date: Date;
  currentDate: string;
  data_url: string;
  news_link : string;

  constructor(private http: HttpClient) {
    this._http = http;
    this.date = new Date();
    this.currentDate = (this.date.toISOString()).slice(0,10);
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    this.data_url = DATA_PART_1 + this.currentDate + DATA_PART_2;
    console.log(this.data_url);
    this._http.get(this.data_url)
      .subscribe(
        results => {
          this.dataArray = results['articles'];
          console.log(this.dataArray);
        },
        error => {
          console.log(error);
        }
      )
  }

}
