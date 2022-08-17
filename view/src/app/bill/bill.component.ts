import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { FoodItem } from '../menu/menu-fooditem.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnChanges {
  public storeid: Array<number> = [];
  @Input() foss: Array<FoodItem> = [];
  @Input() c: number = 0;
  @Input() arrayofid: Array<number> = [];
  @Input() sum: number = 0;

  public flag: boolean = true;
  public newarray: Array<FoodItem> = [];
  private c1 = 0;
  cost: number = 0;
  tot: number = 0;
  public removethis: number = 0;
  get currentid1(): number {
    return this.c1;
  }
  public count: number = this.c;
  public flag1: boolean = false;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if ((this.flag1 = false)) {
      this.newarray = changes['foss'].currentValue;
    }
    this.flag1 = true;
    this.tot = 0;
    for (let b of this.foss) {
      this.tot = this.tot + b.item_cost;
      console.log(b.item_cost);
    }
  }
  remove(fun: FoodItem) {
    const startIndex = this.foss.indexOf(fun);
    this.sum = this.sum - fun.item_cost;
    this.removethis = fun.item_cost;
    console.log('child' + this.sum);
    this.tot = this.tot - fun.item_cost;
    this.storeid.splice(this.foss[startIndex].item_id, 1);
    // console.log(this.storeid);
    const deleteCount = 1;
    this.count = this.count - this.foss[startIndex].item_cost;
    if (startIndex !== -1) {
      this.foss.splice(startIndex, deleteCount);
    }
    // console.log(fun.item_cost);
    if (this.foss.length == 0) {
      location.reload();
    }
    if (fun.item_id == 1) {
      fun.item_cost = 40;
    } else if (fun.item_id == 2) {
      fun.item_cost = 60;
    } else if (fun.item_id == 3) {
      fun.item_cost = 30;
    } else if (fun.item_id == 4) {
      fun.item_cost = 10;
    }
  }
}
