import { Component, Output, EventEmitter, Input } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass } from '../models/album-interface';
import { interval, map, Observable, take } from 'rxjs';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{


  // display():void {
  //   this.affiche = !this.affiche ;
  // }
  
  myAlbum !: AlbumClass[];
selectedAlbum !: any;
  
  allAlbums !: AlbumClass[] ;
  
  timerObservable!: Observable<string>;
  
  count!: string;  
  
  // time !:string;
  constructor(private Album:AlbumServiceService){}
  
  ngOnInit(): void{
    this.myAlbum = this.Album.albums;
    this.allAlbums = this.Album.getAlbums();
    console.log(this.allAlbums);
    console.log(this.Album.count());
  }
showDetails(id:string){
  this.selectedAlbum = this.Album.getAlbum(id);
  console.log(this.selectedAlbum);
}

  
  // @Input () selectedAlbums !: AlbumInterface;
  // @Output() passedValue = new EventEmitter<boolean>();

  // @Output() selectedAlbums = new EventEmitter<AlbumClass>();

  // onAlbumSelect(album: AlbumClass){
  //   this.selectedAlbums.emit(album)
  // }
  // showAlbumDetails = {};

  // afficherdetails(newItem: AlbumInterface){
  //   return this.albums.filter((name)=>newItem.title === name.title)
  // }
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
