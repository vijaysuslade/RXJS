import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
   
    let filterOp=from([
                        {id:1,name:'vijay'},
                        {id:2,name:'pankaj'},
                        {id:3,name:'ram'},
                        {id:4,name:'radhika'}]);
    filterOp.pipe(
      filter(member=>member.name.length>2) //condition is must
    ).subscribe(res=>{
      console.log(res);
    })


  }



}
