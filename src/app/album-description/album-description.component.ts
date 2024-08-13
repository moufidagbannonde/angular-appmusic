import { Component } from '@angular/core';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass, AlbumInterface } from '../models/album-interface';
import { ActivatedRoute } from '@angular/router'
import { OnInit } from '../../../node_modules/@angular/core/index';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrl: './album-description.component.css'
})
export class AlbumDescriptionComponent implements OnInit {
  
  album !: any ;
  constructor(private albumService: AlbumServiceService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getOneAlbum();
  }

  albumId !: any ;

  getOneAlbum() {
    this.albumId = this.route.snapshot.paramMap.get('id');
      console.log(this.albumId);
      this.album = this.albumService.getAlbum(this.albumId)
      console.log(this.album)
      }
   
  }
  


