import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import {AdminComponent} from './pages/admin/admin.component';
import {HomeComponent} from './pages/home/home.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { UsersComponent } from './pages/admin/users/users.component';
import {AdminsComponent} from './pages/admin/admins/admins.component';
const routes: Routes = [ {
  path:'',
  redirectTo: '/authentication',
  pathMatch: 'full'
},{
  path:'authentication',
  component:AuthenticationComponent
},
{
path:'admin',
component:AdminComponent

},{
  path:'home',
  component:HomeComponent
},
{
  path:'adminhome',
  component:AdminhomeComponent
},
{
  path:'users',
  component:UsersComponent
},
{
  path:'admins',
  component:AdminsComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
