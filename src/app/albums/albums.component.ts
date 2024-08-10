import { Component } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass, AlbumInterface } from '../models/album-interface';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  aside: boolean = false;

  albums !: Array<AlbumInterface>;

  allAlbums !: AlbumClass[];

  constructor(private Album:AlbumServiceService){}

  ngOnInit(){
    this.albums = this.Album.albums;
    console.log(this.albums);
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
