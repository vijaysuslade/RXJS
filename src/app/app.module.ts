import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './component/promise/promise.component';

import {Routes,RouterModule} from '@angular/router';
import { ObservableComponent } from './observablef/observable/observable.component';
import { ListComponent } from './observablef/list/list.component';
import { FormeventComponent } from './observablef/formevent/formevent.component'

const appRoutes:Routes=[{path:'promise',component:PromiseComponent},
                         {path:'observable',component:ObservableComponent,children:[
                         {path:'',component:ListComponent},
                         {path:'formEvent',component:FormeventComponent},]},
                                  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FormeventComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
