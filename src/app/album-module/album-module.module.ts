import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from '../albums/albums.component';
import { AsideComponent } from '../aside/aside.component';
import { SearchComponent } from '../search/search.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoginComponent } from '../login/login.component';
import { AlbumDescriptionComponent } from '../album-description/album-description.component';



@NgModule({
  declarations: [
    AlbumsComponent, 
    AsideComponent, 
    SearchComponent,
  NavigationComponent,
  LoginComponent,
  AlbumDescriptionComponent
],
  imports: [
    CommonModule
  ],
  exports: [
    AlbumsComponent,
    AsideComponent,
    SearchComponent,
    NavigationComponent,
    LoginComponent,
    AlbumDescriptionComponent

  ]
})
export class AlbumModuleModule {
  constructor() { }
 }
