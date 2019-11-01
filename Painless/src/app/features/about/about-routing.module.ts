import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AuthGuardService } from '../../core/core.module';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { title: 'app.menu.about' },
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
