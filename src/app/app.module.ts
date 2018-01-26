import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';

import { ListViewService } from './list-view/list-view.service'
import { HttpModule } from '@angular/http';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ProgressbarModule.forRoot()
  ],
  providers: [ListViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
