import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';
import { RequestsoutingModule } from './requests-routing.module';



@NgModule({
  declarations: [RequestsComponent],
  imports: [
    CommonModule,
    RequestsoutingModule
  ]
})
export class RequestsModule { }
