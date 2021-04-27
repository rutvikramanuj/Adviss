import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  optionNotSelected = false;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  addFacultyDiv(){
    this.optionNotSelected=true;
    this.router.navigate(['addFaculty'],{relativeTo:this.route});
   
  }
  modifyFacultyDiv(){
    this.optionNotSelected=true;

    this.router.navigate(['modifyFaculty'],{relativeTo:this.route});
    
  }
  removeFacultyDiv(){
    this.optionNotSelected=true;

    this.router.navigate(['removeFaculty'],{relativeTo:this.route});
   
  }
}
