import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectOption = true;
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
   
  }

  studentSelected(){
    this.selectOption = false;

    this.router.navigate(['studentSignup'],{relativeTo:this.route});
  }
  clerkSelected(){
    this.selectOption = false;

    this.router.navigate(['clerk'],{relativeTo:this.route});

    
  }
  facultySelected(){
    this.selectOption = false;

    this.router.navigate(['facultySignup'],{relativeTo:this.route});
    
  }
  adminSelected(){
    this.selectOption = false;

    this.router.navigate(['admin'],{relativeTo:this.route});
    
  }
}