import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';
import { title } from 'process';

// uset to get value of perticular properties
@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  data:any[];
  constructor() { }

  ngOnInit(): void {

    let pluckdata = from([
    { id: 1, name: 'vijay',job:{title:'SE'}},
    { id: 2, name: 'panakaj',job:{title:'EE'} },
    { id: 3, name: 'ram',job:{title:'SE'}}])


    pluckdata.pipe(pluck('job','title'),toArray()).subscribe(res =>{
      console.log(res)
    this.data=res;
    })
  }

}
