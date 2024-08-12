import { Component, EventEmitter, Output } from '@angular/core';
// import { NgForm } from '../../../node_modules/@angular/forms/index';
import { AlbumServiceService } from '../album-service.service';
import { AlbumClass } from '../models/album-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  word: string = '';

  @Output() searchAlbums: EventEmitter<AlbumClass[]> = new EventEmitter(); // émetteur d'évenement
  constructor(
    private albumService: AlbumServiceService
  ) { }
// form !:NgForm;
//   onSubmit(form: NgForm) {
//     const results = this
//       .albumService.search(form.value.word)
//       .subscribe({
//         next: (alb: AlbumClass[]) => {
//           if (alb.length > 0) {
//             this.searchAlbums.emit(alb);
//           }
//         }
//       });
      // onChangeEmit($event: string) {
      //   const results = this.albumService.search($event)
      //         .subscribe(
      //           (alb: Album[]) => {
      //             this.searchAlbums.emit(alb);
      //           }
      //         )
      // }

  }

