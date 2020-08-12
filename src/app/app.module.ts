import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './component/promise/promise.component';

import {Routes,RouterModule} from '@angular/router';
import { ObservableComponent } from './observablef/observable/observable.component';
import { ListComponent } from './observablef/list/list.component';
import { FormeventComponent } from './observablef/formevent/formevent.component';
import { IntervalComponent } from './observablef/interval/interval.component';
import { OfFormComponent } from './observablef/of-form/of-form.component';
import { ToArrayComponent } from './observablef/to-array/to-array.component';
import { CustomComponent } from './observablef/custom/custom.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { PluckComponent } from './observablef/pluck/pluck.component';
import { FilterComponent } from './observablef/filter/filter.component';
import { TakeComponent } from './observablef/take/take.component'

const appRoutes:Routes=[{path:'promise',component:PromiseComponent},
                         {path:'observable',component:ObservableComponent,children:[
                         {path:'',component:ListComponent},
                         {path:'formEvent',component:FormeventComponent},
                         {path:'interval',component:IntervalComponent},
                         {path:'of-form',component:OfFormComponent},
                         {path:'to-array',component:ToArrayComponent},
                         {path:'custom',component:CustomComponent},
                         {path:'Map',component:MapOperatorComponent},
                         {path:'pluck',component:PluckComponent},
                         {path:'filter',component:FilterComponent},
                         {path:'take',component:TakeComponent}]},                                
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FormeventComponent,
    IntervalComponent,
    OfFormComponent,
    ToArrayComponent,
    CustomComponent,
    MapOperatorComponent,
    PluckComponent,
    FilterComponent,
    TakeComponent

  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
