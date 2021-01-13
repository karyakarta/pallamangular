import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesearchComponent } from './messagesearch/messagesearch.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterflowRoutingModule { }
