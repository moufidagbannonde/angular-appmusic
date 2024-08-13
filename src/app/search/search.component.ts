import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms/index';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass } from '../models/album-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit{
  word: string = '';


  constructor(
    private albumService: AlbumServiceService
  ) { }



  ngOnInit(){
    
  }
     
}
