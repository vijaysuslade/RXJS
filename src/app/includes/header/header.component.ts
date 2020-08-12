import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { SubjectService } from 'src/app/observablef/subjectdemo/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterContentChecked {

  excluse:Boolean=false;
  constructor(private _subjectService:SubjectService,private ref: ChangeDetectorRef) { }
  ngOnInit(): void {
   
  }
  ngAfterContentChecked() {
    this._subjectService.excluse.subscribe(res=>{
      this.excluse=res;
     console.log(res)
      let data=this.ref.detectChanges();
    })
    
}

}
