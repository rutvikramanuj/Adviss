import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  slidePageView = true;

  constructor() { }

  ngOnInit(): void {
  }
  hiddenSlide(){
    
    setTimeout(() => {
      this.slidePageView=false;
    }, 5000);
  }
}
