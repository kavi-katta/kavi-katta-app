import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './modules/accounts/container/accounts.component';
import { LoginComponent } from './modules/accounts/login/login.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent}
  ]},
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: '**', redirectTo: 'accounts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
