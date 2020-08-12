import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjectdemo',
  templateUrl: './subjectdemo.component.html',
  styleUrls: ['./subjectdemo.component.css']
})
export class SubjectdemoComponent implements OnInit,OnDestroy{

  constructor(private _subjectService:SubjectService) { 
  }
  
  ngOnInit(): void {
    this._subjectService.excluse.next(true);
  }
  
  ngOnDestroy(): void {
   this._subjectService.excluse.next(false);
  }
 
}
