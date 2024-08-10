import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '../../node_modules/@angular/forms/index';
import { AlbumModuleModule } from './album-module/album-module.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
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
