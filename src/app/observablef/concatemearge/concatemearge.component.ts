import { Component, OnInit } from '@angular/core';
import { interval, concat, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-concatemearge',
  templateUrl: './concatemearge.component.html',
  styleUrls: ['./concatemearge.component.css']
})
export class ConcatemeargeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const sourceTech=interval(1000).pipe(map(data=>'Tech video'+data),take(5))
    const sourcenews=interval(1000).pipe(map(data=>'News video'+data),take(5))
    const sourcecommady=interval(1000).pipe(map(data=>'commady video'+data),take(5))
   
    //after complete of one stream next strem will be start
    const source=concat(sourceTech,sourcenews,sourcecommady);
    const Merge=merge(sourceTech,sourcenews,sourcecommady);

    Merge.subscribe(res=>{
      console.log(res);
    })

    

  }

}
