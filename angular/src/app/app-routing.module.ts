import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AuthenticationGuard } from './authentication.guard';
import { AuthguardServiceService } from './authguard-service.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadImageComponent } from './upload-image/upload-image.component';


const routes: Routes = [

  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent,canActivate:[AuthenticationGuard]},
  {path:'admin',component:AdminscreenComponent,canActivate:[AuthenticationGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   