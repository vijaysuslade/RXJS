import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  techStatus = '';
  constructor() { }
  techStatus2=' ';
  unSubcribe:Subscription;
  ngOnInit(): void {


    const cusObs = Observable.create(observer => {
      setTimeout(() => {
        observer.next("Java");
      }, 100);
      setTimeout(() => {
        observer.next("Anguar");
      }, 200);
      setTimeout(() => {
        observer.next("Python");
        observer.error( new Error());
      }, 300);
      setTimeout(() => {
        observer.next("Ruby");
        observer.complete();
      }, 400);
    })


    cusObs.subscribe(res => {
      let li = document.createElement('li');
      li.innerText = res;
      document.getElementById('manul').appendChild(li);
    },(err) => {
      this.techStatus = 'error';
    }, () => {
      console.log('yooo');
      this.techStatus = 'complete';
    })


   let  list=['Java','Angular','Python','Ruby'];
   let count=0;
   
    const cusObs2=Observable.create(observer=>{
         setInterval(()=>{
           observer.next(list[count]);
           if(count>=3)
             {
              observer.complete();
             }
            //  if(count==2)
            //  {
            //   observer.error( new Error());
            //  }

           count++;
         },200)
    })
 
   this.unSubcribe=cusObs2.subscribe(res=>{
    let li = document.createElement('li');
    li.innerText = res;
    document.getElementById('custom').appendChild(li);
    },(err)=>{
      this.techStatus2='error'
      console.log(this.techStatus2)
    },
    ()=>{
      this.techStatus2='complete'
      console.log(this.techStatus2)
    })

   
  }    
}
