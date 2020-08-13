import { Injectable } from '@angular/core';
import { Subject, AsyncSubject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  
  excluse=new Subject<Boolean>();
 
  // exclusive=new BehaviorSubject('value'); //we can store value
  //exclusive=new AsyncSubject(); after complete the data will get
  //excluse=new ReplaySubject();//get bunch of data

 

  constructor() { }
}
