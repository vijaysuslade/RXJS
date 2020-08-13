import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from, Observable, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { SequenceEqualSubscriber } from 'rxjs/internal/operators/sequenceEqual';

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
  getData(data){
       return  of( data +'Video Uploaded');
  }

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


     //margeAll and neregMap use to subscribe inside subscribe data
    const source=from(['tech','comedy','News']);
    
    source.pipe(
      //  map(res=>this.getData(res)),
      //  mergeAll()
      mergeMap(res=>this.getData(res)) //combo of map and mergeMap
    ).subscribe(res=>{
      let el=document.createElement('li');
      el.innerText=res;
      document.getElementById('mergeAll').appendChild(el)
    })

}
}

//  concatMap and concatAll -subscribe strem by SequenceEqualSubscriber
// concatMap-combo of map+concatAll