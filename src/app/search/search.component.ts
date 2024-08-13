import { Component, EventEmitter, Output, OnInit } from '@angular/core';
// import { FormControl, NgForm } from '../../../node_modules/@angular/forms/index';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass } from '../models/album-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit {


  searching?: AlbumClass

  allAlbums !: AlbumClass[];

  constructor(
    private albumService: AlbumServiceService
  ) { }

  // word = new FormControl("");

  search(mot: any) {
    if (this.searching) {
      this.searching = this.allAlbums.find((el: AlbumClass) => {
        el.title.toLowerCase().includes(mot);
      })
      return this.searching
    } else {
      return "Aucun album de ce nom n'a été trouvé ! "
    }
  }

  ngOnInit() {

  }

}
