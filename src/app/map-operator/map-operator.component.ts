import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit {
  data;
  constructor() { 
   
  }
  subscription:Subscription;
  ngOnInit(): void {

    const map1=interval(10);
    this.subscription=map1.pipe(
      map(res=>res)
      ).subscribe(res=>{
    this.data=res;
    })

    setTimeout(()=>{
      this.subscription.unsubscribe();
    },100)
  

  const user=from([{id:1,name:'vijay'},
  {id:2,name:'Panakj'},
  {id:3,name:'Arnav'},
  {id:4,name:'Mauli'},])

  user.pipe(
    map(res=>res.name))
    .subscribe(res=>{
      let el=document.createElement('li');
      el.innerText=res;
      document.getElementById('LiId').appendChild(el)
    })

}
}
