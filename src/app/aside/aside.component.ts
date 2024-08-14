import { Component, Output, EventEmitter, Input } from '@angular/core';
// import { Input } from '../../../node_modules/@angular/core/index';
import { AlbumClass, AlbumInterface } from '../models/album-interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  link: string = "."
  // image:string = "../../assets/capeverdeflag.jpg"
  @Input() album!: AlbumClass;

  // @Output() onPlay: EventEmitter<AlbumClass> = new EventEmitter();

  // play(album: AlbumClass) {
  //   this.onPlay.emit(album);
  // }
  playing: boolean = false;

  ratio: number = 0;

  sum: number = 0;

  albums !: AlbumClass[];

  convert !: number;

  calcul(): void {
    //   this.sum = this.album.tracks?.find.map((arr: number,curr: number) =>arr+curr, 0);
    //   console.log(this.sum)
  }
  progressBar: any;
  constructor() { }
  ngOnInit() {
    console.log(this.album);
    this.calcul();
  }

  specific !: number
  play(): void {
    this.playing = true;
    this.ratio = 0;
    // nombre de chansons de l'album d'un auteur
    console.log("nombre de chansons" + this.album.trackCount);
    // 
    if (this.album.tracks) {
      for (let i: number = 0; i < this.album.tracks?.length; i++) {
          this.specific = this.album.tracks[i].duration;
          // récupération de tous les durées d'album
          console.log(this.specific); 
          this.convert = this.specific 
          // this.sum += this.specific;
          console.log(this.convert)
      }
    }
    console.log("somme des durations" + this.sum)
    this.progressBar = setInterval(() => {
      if (this.ratio < 100) {
        this.ratio += 0.5;
      } else if(this.ratio == this.album.trackCount){
        clearInterval(this.progressBar);
        this.playing = false;
      }
    }, 1000)
  }


}

