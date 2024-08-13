import { Component, Output, EventEmitter } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';
import { NgModel } from '../../../node_modules/@angular/forms/index';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrl: './paginate.component.css'
})
export class PaginateComponent implements OnInit{
  pageSize: number = 5;
  totalItems: number = 13;
  itemPerPage: number = 2;
  items: any[] = [];

  constructor(private service: AlbumServiceService) {
    for(let i: number = 0; i < this.totalItems; i ++){
      this.items.push(i);
    }
   }


  ngOnInit(): void {
    this.items = this.items.slice(this.itemPerPage * (this.pageSize - 1), this.itemPerPage * this.pageSize)
  }

  
}
