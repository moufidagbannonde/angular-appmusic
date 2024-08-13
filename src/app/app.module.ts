import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModuleModule } from './album-module/album-module.module';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { PaginateComponent } from './paginate/paginate.component';


@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    PaginateComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumModuleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
