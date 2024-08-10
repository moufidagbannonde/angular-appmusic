import { Component, Output, EventEmitter } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass, AlbumInterface } from '../models/album-interface';
import { interval, map, Observable, take } from 'rxjs';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  // @Output() passedValue = new EventEmitter<boolean>();

  display():void {
    this.affiche = !this.affiche ;
  }
  
  affiche: boolean = false;

  albums !: Array<AlbumInterface>;

  allAlbums !: AlbumClass[];

  timerObservable!: Observable<string>;

  count!: string;

 

  // time !:string;
  constructor(private Album:AlbumServiceService){}

  ngOnInit(): void{
    this.albums = this.Album.albums;
  }

  showAlbumDetails = {};

  afficherdetails(newItem: AlbumInterface){
    return this.albums.filter((name)=>newItem.title === name.title)
  }
search($event: AlbumClass[]){
  if($event){
    this.allAlbums = $event
  }
}
  // disk !:AlbumInterface;
  // asideShower(album: AlbumInterface){
  //   this.aside = true;
  //   this.disk = album;
  // }
}
