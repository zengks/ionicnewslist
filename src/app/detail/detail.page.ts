import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  title:string;
  description: string;
  link: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.title = this.route.snapshot.paramMap.get('title');
   this.description = this.route.snapshot.paramMap.get('description');
  }

}
