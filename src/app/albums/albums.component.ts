import { Component } from '@angular/core';
import { AlbumServiceService } from '../album-service.service';
import { AlbumInterface } from '../models/album-interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums !: Array<AlbumInterface>
  constructor(private Album:AlbumServiceService){}

  coeur:string = "../../assets/favorite_24dp_FILL0_wght400_GRAD0_opsz24.svg";
  chrono:string = ""
  ngOnInit(){
    this.albums = this.Album.albums;
    console.log(this.albums);
  }
}
