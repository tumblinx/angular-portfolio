import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss'
})
export class CursorComponent {
  private bigBall!: HTMLElement;
  private smallBall!: HTMLElement;
  
  constructor() {}
  
  ngAfterViewInit() {
    this.bigBall = document.querySelector('.cursor__ball--big')!;
    this.smallBall = document.querySelector('.cursor__ball--small')!;

    document.body.addEventListener('mousemove', this.onMouseMove.bind(this));
  
  }
  
  onMouseMove(e: MouseEvent) {
    gsap.to(this.bigBall, { duration: 0.4, x: e.pageX - 15, y: e.pageY - 15 });
    gsap.to(this.smallBall, { duration: 0.1, x: e.pageX - 5, y: e.pageY - 7 });
  }
  
}
