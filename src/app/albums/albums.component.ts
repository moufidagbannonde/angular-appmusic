import { Component } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass, AlbumInterface } from '../models/album-interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'



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
  perPage = 2;
  affiche: boolean = false;
  myAlbum: AlbumClass[];

  selectedAlbum !: any;

  selectOneAlbum !: any;

  allAlbums !: AlbumClass[];

  timerObservable!: Observable<string>;

  count!: string;

  searching !: AlbumClass[];

  // time !:string;

  // constructeur
  constructor(private Album: AlbumServiceService, private router: Router) {
    this.myAlbum = this.Album.getAlbums();
    this.filteredAlbumList = this.myAlbum;
  }
  // fonction de recherche d'un album
  filterResults(text: string) {
    if (!text) {
      this.filteredAlbumList = this.myAlbum
    } else {
      this.filteredAlbumList = this.myAlbum.filter(albumLocation => albumLocation?.title.toLowerCase().includes(text.toLowerCase()));
      console.log(this.filteredAlbumList)
    }
  }
  // au chargement de la page
  ngOnInit(): void {
    // au chargement de la page
    this.myAlbum = this.Album.albums;
    // récupérer la 
    this.allAlbums = this.Album.getAlbums();
    this.updateAlbums(1);

    this.Album.sendCurrentNumberPage.subscribe((pageNumber: number) => this.updateAlbums(pageNumber))
  }
  updateAlbums(pageNumber: number): void {
    this.myAlbum = this.Album.paginate(pageNumber, this.perPage);
    this.search();
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

  searchValue !: string;


  search(): void {
    if (this.word.trim()) {
      this.searching = this.myAlbum.filter(
        (el: AlbumClass) => {
          el.title.toLocaleLowerCase().includes(this.word.toLocaleLowerCase());
        }
      )
      console.log(this.searching);
      console.log(this.word)
    } else {
      this.searching = this.myAlbum;
    }
  }
  onSearch(): void {
    this.search()
  }

}
