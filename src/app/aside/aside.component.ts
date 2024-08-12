import { Component, Output, EventEmitter, Input } from '@angular/core';
// import { Input } from '../../../node_modules/@angular/core/index';
import { AlbumClass, AlbumInterface } from '../models/album-interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  // image:string = "../../assets/capeverdeflag.jpg"
  @Input() album!: AlbumClass;

  // @Output() onPlay: EventEmitter<AlbumClass> = new EventEmitter();

  // play(album: AlbumClass) {
  //   this.onPlay.emit(album);
  // }
  constructor() { }
  ngOnInit() {
    console.log(this.album);
  }
}

