import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ClerkComponent } from './signup/clerk/clerk.component';
import { AdminComponent } from './signup/admin/admin.component';
import { StudentSignupComponent } from './signup/student/student.component';
import { SidebarComponent } from './signup/sidebar/sidebar.component';
import { FacultySignupComponent } from './signup/faculty/faculty.component';
import { AddComponent } from './faculty/add/add.component';
import { ModifyComponent } from './faculty/modify/modify.component';
import { RemoveComponent } from './faculty/remove/remove.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ModifyStudentComponent } from './student/modify-student/modify-student.component';
import { RemoveStudentComponent } from './student/remove-student/remove-student.component';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent,children:[
    {path:'addStudent',component:AddStudentComponent},
    {path:'modifyStudent',component:ModifyStudentComponent},
    {path:'removeStudent',component:RemoveStudentComponent},

  ]},
  {path:'faculty',component:FacultyComponent, children:[
    {path:'addFaculty',component:AddComponent},
    {path:'modifyFaculty',component:ModifyComponent},
    {path:'removeFaculty',component:RemoveComponent},

  ]},
  {path:'profile',component:ProfileComponent},
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactUsComponent},
  // {path:'navbar',component:NavbarComponent},
   {path:'signup',component:SignupComponent, children:[
        {path:'admin',component:AdminComponent},
        {path:'clerk',component:ClerkComponent},
        {path:'studentSignup',component:StudentSignupComponent},
        {path:'facultySignup',component:FacultySignupComponent},
        {path:'sidebar',component:SidebarComponent},
    ]},
   {path:'login',component:LoginComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
