import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModuleModule } from './album-module/album-module.module';
import { FormsModule } from '../../node_modules/@angular/forms/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
