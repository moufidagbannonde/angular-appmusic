import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModuleModule } from './album-module/album-module.module';


@NgModule({
  declarations: [
    AppComponent,
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
