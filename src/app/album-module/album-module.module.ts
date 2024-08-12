import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from '../albums/albums.component';
import { AsideComponent } from '../aside/aside.component';
import { SearchComponent } from '../search/search.component';
import { NavigationComponent } from '../navigation/navigation.component';



@NgModule({
  declarations: [AlbumsComponent, 
    AsideComponent, 
    SearchComponent,
  NavigationComponent
],
  imports: [
    CommonModule
  ],
  exports: [
    AlbumsComponent,
    AsideComponent,
    SearchComponent,
    NavigationComponent
  ]
})
export class AlbumModuleModule { }
