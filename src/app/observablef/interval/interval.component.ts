import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  
  broadCast;

  videoSubcription:Subscription;
  constructor() { }
  ngOnInit(): void {
   
    //let broadCastVideo=interval(200);interval
                      //  timer(delay,interval)
     let broadCastVideo=timer(2000,100);//timer take 2 argument one is when to start and after how many time emit the value
    

    this.videoSubcription=broadCastVideo.subscribe(res=>{
    this.broadCast=res;
    if(res>=5){
      this.videoSubcription.unsubscribe();
    }
    })
  }

}
