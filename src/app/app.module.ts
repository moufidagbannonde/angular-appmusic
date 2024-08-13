import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModuleModule } from './album-module/album-module.module';
import { PaginateComponent } from './paginate/paginate.component';
import { FormsModule } from '../../node_modules/@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms/index';


@NgModule({
  declarations: [
    AppComponent,
    PaginateComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
