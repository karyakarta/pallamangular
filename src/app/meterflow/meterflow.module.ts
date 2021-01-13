import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterflowRoutingModule } from './meterflow-routing.module';
import { MessagesearchComponent } from './messagesearch/messagesearch.component';
import { FileviewComponent } from './messagesearch/fileview/fileview.component';


@NgModule({
  declarations: [MessagesearchComponent, FileviewComponent],
  imports: [
    CommonModule,
    MeterflowRoutingModule
  ]
})
export class MeterflowModule { }
