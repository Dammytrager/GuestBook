import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'admin', component:AdminComponent},
  {path:'home', component:HomeComponent},
  {path:'admin/sign-in', component:AdminComponent},
  {path:'admin/dashboard', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const pages = [
  HomeComponent,
  AdminComponent
]
