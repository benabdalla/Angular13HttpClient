import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'user',component:UserhomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
