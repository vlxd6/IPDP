import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ExkitComponent } from './exkit/exkit.component';
import { JanteComponent } from './jante/jante.component';
import { ItemComponent } from './item/item.component';
import { ItemJanteComponent } from './itemjante/itemjante.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Log In' } }, 
  { path: 'register', component: RegisterComponent, data: { title: 'Create an account' } }, 
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent, data: { title: 'Hello!' } },
  { path: 'exkit', component: ExkitComponent, data: { title: 'Sport exhaust kits' } }, 
  { path: 'jante', component: JanteComponent, data: { title: 'JR & CONCAVER SALE' } }, 
  { path: 'item/:indexid', component: ItemComponent },
  { path: 'itemjante/:indexid', component: ItemJanteComponent },
  { path: 'cart', component: CartComponent, data: { title: 'My Cart' } }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
