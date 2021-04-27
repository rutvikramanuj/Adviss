import { relative } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  optionNotSelected = false;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  addStudentDiv(){
    this.optionNotSelected = true;
    this.router.navigate(['addStudent'], {relativeTo :this.route});
  }

  modifyStudentDiv(){
    this.optionNotSelected = true;

    this.router.navigate(['modifyStudent'], {relativeTo :this.route});

  }

  removeStudentDiv(){
    this.optionNotSelected = true;

    this.router.navigate(['removeStudent'], {relativeTo :this.route});

  }
  
}
