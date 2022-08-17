import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from './menu-fooditem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private http: HttpClient, private route: Router) {}
  public fooditem: FoodItem[] = [];
  public foodlistbill: FoodItem[] = [];

  ngOnInit(): void {
    this.getfooditems();
  }
  public arrayid: Array<number> = [];
  public arrayname: Array<String> = [];
  public fos: Array<FoodItem> = [];
  public count: number = 0;
  public currentcost: Array<number> = [];
  public clicked: boolean = false;
  public idli: number = 0;
  public dosa: number = 0;
  public vada: number = 0;
  public pav: number = 0;
  public sum: number = 0;

  passid(id: number, name: String, foody: FoodItem, clicked: boolean) {
    this.arrayid.push(id);
    this.clicked = true;
    this.arrayname.push(name);
    this.count = this.count + foody.item_cost;

    if (this.fos.includes(foody)) {
      if (foody.item_id == 1) {
        this.idli = this.idli + 40;
        foody.item_cost = 0;
        foody.item_cost = this.idli;
        console.log('idli: ' + this.idli);
        // foody.item_cost = foody.item_cost + 40;
      } else if (foody.item_id == 2) {
        this.dosa = this.dosa + 60;
        foody.item_cost = 0;
        foody.item_cost = this.dosa;
        console.log('dosa: ' + this.dosa);
        // foody.item_cost = foody.item_cost + 60;
      } else if (foody.item_id == 3) {
        this.vada = this.vada + 30;
        foody.item_cost = 0;
        foody.item_cost = this.vada;
        console.log('vada: ' + this.vada);

        // foody.item_cost = foody.item_cost + 30;
      } else if (foody.item_id == 4) {
        this.pav = this.pav + 10;
        foody.item_cost = 0;
        foody.item_cost = this.pav;
        console.log('pav: ' + this.pav);
        // foody.item_cost = foody.item_cost + 10;
      }
    } else {
      if (foody.item_id == 1) {
        this.idli = 40;
      } else if (foody.item_id == 2) {
        this.dosa = 60;
      } else if (foody.item_id == 3) {
        this.vada = 30;
      } else if (foody.item_id == 4) {
        this.pav = 10;
      }
      this.fos.push(foody);
    }
    this.sum = this.dosa + this.idli + this.vada + this.pav;

    console.log('parent' + this.sum);
    console.log('pav: ' + this.pav);
    console.log('vada: ' + this.vada);
    console.log('dosa: ' + this.dosa);
    console.log('idli: ' + this.idli);
  }

  //   if (this.fos.includes(foody)) {
  //     foody.item_cost = foody.item_cost + foody.item_cost;
  //   } else {
  //     this.fos.push(foody);
  //   }
  // }
  getfooditems() {
    this.http.get<FoodItem[]>('/api/getfood').subscribe((response) => {
      this.fooditem = response;
      for (let some of this.fooditem) {
        this.currentcost.push(some.item_cost);
      }
    });
  }
}
