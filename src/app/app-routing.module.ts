import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => {
      return import('./modules/routed/login/login.module').then(m => m.LoginModule);
    }
  },
  {
    path: 'messages', loadChildren: () => {
      return import('./modules/routed/messages/messages.module').then(m => m.MessagesModule);
    }
  },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
