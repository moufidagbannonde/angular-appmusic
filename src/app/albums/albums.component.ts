import { Component } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass, AlbumInterface } from '../models/album-interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  filteredAlbumList: AlbumClass[] = [];


  mot !: string;
  // display():void {
  //   this.affiche = !this.affiche ;
  // }

  affiche: boolean = false;
  myAlbum !: AlbumClass[];

  selectedAlbum !: any;

  selectOneAlbum !: any;

  allAlbums !: AlbumClass[];

  timerObservable!: Observable<string>;

  count!: string;

  searching !: AlbumClass[]
  // time !:string;
  constructor(private Album: AlbumServiceService, private router: Router) {
    this.myAlbum = this.Album.getAlbums();
    this.filteredAlbumList = this.myAlbum;
  }

  ngOnInit(): void {
    // au chargement de la page
    this.myAlbum = this.Album.albums;
    // récupérer la 
    this.allAlbums = this.Album.getAlbums();
    //  this.Album.paginate(0, this.Album.paginateNumberPage())
    console.log(this.word)
  }

  albumView(id: string) {
    // récupérer l'album à travers son id
    this.selectedAlbum = this.Album.getAlbum(id)
    // naviguer à travers la route /album/:id
    this.router.navigateByUrl(`album/${this.selectedAlbum.id}`)
  }


  showDetails(id: string) {
    this.affiche = true;
    this.selectedAlbum = this.Album.getAlbum(id);
    // console.log(this.selectedAlbum);
  }

  word: string = "";

  search() {
    if (this.word.trim() !== "") {
      return this.searching = this.allAlbums.filter(
        (el: AlbumClass) => {
          el.title.toLowerCase().includes(this.word.toLowerCase());
          console.log(this.searching);
          console.log(this.word)
        }
      )
    } else {
      return this.allAlbums;
    }
  }

}
