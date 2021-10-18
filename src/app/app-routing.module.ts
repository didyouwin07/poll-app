import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { LoggedinComponent } from "./loggedin/loggedin.component";

const routes: Routes = [
  {path:'', component:LoginComponent,pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'loggedin', component:LoggedinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,LoggedinComponent]
