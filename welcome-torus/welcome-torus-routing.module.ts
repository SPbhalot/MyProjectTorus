import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeTorusPage } from './welcome-torus.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeTorusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeTorusPageRoutingModule {}
