import { Component, OnInit } from '@angular/core';
import { interval, from,of } from 'rxjs';
import {toArray, take} from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   

    const toArraydata=interval(1000);
    toArraydata.pipe(take(5),toArray()).subscribe(res=>{
      console.log(res);
    })

    let  user=[
           {name:'Anup',skill:'java'},
           {name:'vijay',skill:'java'},
           {name:'shankat',skill:'java'},
           {name:'Anup',skill:'java'},]


      let toUser=from(user);      
      toUser.pipe(toArray()).subscribe(res=>{
        console.log(res);
      })


      let ofArray=of('vijay','pankaj','raj');
      ofArray.pipe(take(1),toArray()).subscribe(res=>{
        console.log(res);
      })

  }


}
