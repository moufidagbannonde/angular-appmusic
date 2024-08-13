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
  playing : boolean = false;

  ratio: number = 0;

  sum : number = 0;

  albums !: AlbumClass[]

  calcul(): void{
    this.sum = this.album.tracks
    // .map((arr: number,curr: number) =>arr+curr, 0);
    console.log(this.sum)
  }
  progressBar : any;
  constructor() { }
  ngOnInit() {
    console.log(this.album);
    this.calcul();
  }

 play(): void{
  this.playing = true;
  this.ratio = 0;

  this.progressBar = setInterval(()=>{
    if(this.ratio < 100){
      this.ratio += 1;
    } else {
      clearInterval(this.progressBar);
      this.playing = false;
    }
  }, 1000)
 }

 
}

