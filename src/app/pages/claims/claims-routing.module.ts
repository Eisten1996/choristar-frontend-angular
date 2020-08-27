import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';

const routes: Routes = [{ path: '', component: ClaimsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimsRoutingModule {}
