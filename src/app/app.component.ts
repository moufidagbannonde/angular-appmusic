import { Component } from '@angular/core';
import {interval, map, Observable, take} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'appmusic';

  
  timerObservable !: Observable<string>;

count !: string;
   constructor(){

   }
   ngOnInit():void {
  this.timerObservable = interval(1000).pipe(
    take(3600 * 12),
    map((num:number) => {
      const hours = Math.floor(num / 3600);
      const minutes = Math.floor(num / 60);
      return `Time: ${this.format(hours)} h ${this.format(minutes - hours * 60)} min ${this.format(num - minutes * 60)} s`;
    })
  );
  this.timerObservable.subscribe((time:string) => {
    this.count = time;
  });
}
format(num: number): string {
  return (num < 10 ? '0' : '') + num;
}
}
