import { Component, Input, EventEmitter } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';
import { NgModel } from '../../../node_modules/@angular/forms/index';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrl: './paginate.component.css'
})
export class PaginateComponent implements OnInit {

  @Input() perPage = 2; // Nombre d'albums par page

  totalPages!: number;

  currentPage = 1;

  pages: number[] = [];

  constructor(private albumService: AlbumServiceService) {}

  ngOnInit(): void {
    // Calculer le nombre total de pages basé sur le nombre total d'albums et les albums par page
    const totalAlbums = this.albumService.getAlbums().length;
    this.totalPages = Math.ceil(totalAlbums / this.perPage);
    this.pages = Array(this.totalPages).fill(0).map((_, i) => i + 1);

    // S'abonner aux changements de page pour mettre à jour la page courante
    this.albumService.sendCurrentNumberPage.subscribe(page => {
      this.currentPage = page;
    });
  }

  next(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.albumService.currentPage(this.currentPage);
    }
  }

  previous(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.albumService.currentPage(this.currentPage);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.albumService.currentPage(page);
    }
  }
}
