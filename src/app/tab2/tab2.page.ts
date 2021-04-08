import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NgForm } from '@angular/forms';

const iconName = "pricetag-outline";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: Array<{content: string; icon: string; index: number}>;
  inputContent:string;
  displayList: Array<any>;
  private _storage: Storage;

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  ionViewWillEnter() {
    this.getItems();
  }

  onSubmit(form: NgForm){
    this.addItem(form.value.content);
    this.inputContent = "";
  }

  addItem(content: string){
    this.items.push({
      content: content,
      icon: iconName,
      index: this.items.length
    });
    this._storage.set("To Do List", JSON.stringify(this.items));
  }

  getItems(){
    this._storage.get("To Do List")
      .then(list => {
        this.displayList = JSON.parse(list);
        if(this.displayList == null){
          this.items = [];
        }else{
          this.items = this.displayList;
        }
      })
  }

  deleteItem(index){
    this.items.splice(index,1);
    for(let i=0; i<this.items.length; i++){
      this.items[i].index = i;
    }
    this._storage.set("To Do List", JSON.stringify(this.items));
  }
}
