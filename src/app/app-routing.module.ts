import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./registration-module/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-module/user.module').then(
        (m) => m.UserModule
      ),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  { path: '', redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
