import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
