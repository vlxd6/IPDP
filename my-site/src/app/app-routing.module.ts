import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ExkitComponent } from './exkit/exkit.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'contact', component: ContactComponent, title: 'Hello!'},
  {path: 'exkit', component: ExkitComponent, title: 'Sport exhaust kits'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
