import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { MessagesearchComponent } from './meterflow/messagesearch/messagesearch.component';
import { FileviewComponent } from './meterflow/messagesearch/fileview/fileview.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule} from 'angular-datatables';

import { FormsModule } from '@angular/forms';


import {NodeService} from './meterflow/messagesearch/fileview/nodeservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';


import {TreeTableModule} from 'primeng/treetable';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesearchComponent,
    FileviewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    TreeTableModule,
  ],
  bootstrap: [AppComponent],
  providers: [NodeService]
})
export class AppModule { }
