import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]

})
export class HomeComponent implements OnInit {
  loadedFeature='';
  condition = true;
  slidePageView = true;
  loadPage=true;
  imgClass1 = 'assets/images/1.jpg';
  imgClass2 = 'assets/images/2.jpg';
  imgClass3 = 'assets/images/3.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  onLoadPage(){
    this.loadPage=false;

  }
  carouselView(){
    
    setTimeout(() => {
      this.slidePageView = true;
      console.log(this.slidePageView);
      
      return this.slidePageView;
    }, 2000);
  }
}
