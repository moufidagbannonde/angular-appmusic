import { Component, Output, EventEmitter, Input } from '@angular/core';
// import { Input } from '../../../node_modules/@angular/core/index';
import { AlbumClass, AlbumInterface } from '../models/album-interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  @Input() albumdetails !:AlbumInterface;

  @Output() newItemEvent = new EventEmitter<AlbumInterface>();

  afficheDetails(valeur: AlbumInterface){
      this.newItemEvent.emit(valeur);
      console.log(valeur);
  }
 
  }

