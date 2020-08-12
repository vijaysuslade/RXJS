import { Component, OnInit } from '@angular/core';
import { interval, from, timer, fromEvent } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor() { }

   
  ngOnInit(): void {
  
  let takeInterval=from(['vijay','panakaj','ram','narayan','ganya','rurt'])

  //  take
  takeInterval.pipe(
    take(5)
  ).subscribe(res=>{
    //console.log(res)
  })

//  take
takeInterval.pipe(
  takeLast(5)
).subscribe(res=>{
//  console.log(res)
})

let takIn=interval(1000);
let takeTimer=fromEvent(document,'click')
//  takeUntil
takIn.pipe(
  takeUntil(takeTimer)
).subscribe(res=>{
  console.log(res)
})


}

}
