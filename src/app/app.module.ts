import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './component/promise/promise.component';

import {Routes,RouterModule} from '@angular/router'

const appRoutes:Routes=[{path:'promise',component:PromiseComponent},
                        {path:'**',redirectTo:'promise'},                                            ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
