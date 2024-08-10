import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from '../albums/albums.component';
import { AsideComponent } from '../aside/aside.component';
import { SearchComponent } from '../search/search.component';



@NgModule({
  declarations: [AlbumsComponent, AsideComponent,SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlbumsComponent,
    AsideComponent,
    SearchComponent
  ]
})
export class AlbumModuleModule { }
