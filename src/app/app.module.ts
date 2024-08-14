import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginateComponent } from './paginate/paginate.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { AsideComponent } from './aside/aside.component';
import { AlbumsComponent } from './albums/albums.component';
import { FormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms/index';


@NgModule({
  declarations: [
    AppComponent,
    PaginateComponent,
    AlbumsComponent, 
    AsideComponent, 
    SearchComponent,
  NavigationComponent,
  LoginComponent,
  AlbumDescriptionComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
