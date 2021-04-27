import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClerkComponent } from './signup/clerk/clerk.component';
import { AdminComponent } from './signup/admin/admin.component';
import {StudentSignupComponent} from './signup/student/student.component';
import { SidebarComponent } from './signup/sidebar/sidebar.component';
import { FacultySignupComponent } from './signup/faculty/faculty.component';
import { AddComponent } from './faculty/add/add.component';
import { ModifyComponent } from './faculty/modify/modify.component';
import { RemoveComponent } from './faculty/remove/remove.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ModifyStudentComponent } from './student/modify-student/modify-student.component';
import { RemoveStudentComponent } from './student/remove-student/remove-student.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    HomeComponent,
    StudentComponent,
    FacultyComponent,
    ProfileComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    ContactUsComponent,
    ClerkComponent,
    AdminComponent,
    SidebarComponent,
    StudentSignupComponent,
    FacultySignupComponent,
    AddComponent,
    ModifyComponent,
    RemoveComponent,
    AddStudentComponent,
    ModifyStudentComponent,
    RemoveStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
