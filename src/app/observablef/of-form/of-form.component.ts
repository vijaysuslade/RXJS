import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-of-form',
  templateUrl: './of-form.component.html',
  styleUrls: ['./of-form.component.css']
})
export class OfFormComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
   
    
    let ofDemo=of('vijay','pankaj','ram');  
    ofDemo.subscribe(res=>{
      console.log(res);
      let el =document.createElement('li');
      el.innerText=res;
      document.getElementById('eleContainer').appendChild(el);
    })

    let formDemo=from(['vijay','pankaj','ram']);  
    ofDemo.subscribe(res=>{
     // console.log(res);
      let el =document.createElement('li');
      el.innerText=res;
      document.getElementById('formWithArray').appendChild(el);
    })


    const promise=new Promise<string>(resolve=>{
     setTimeout(() => {
       resolve("resove promise")
     }, 300);
    })
    const fromEithObservable=from(promise);
    fromEithObservable.subscribe(res=>{
      console.log("Resolve promise=>",res);
      let elm =document.createElement('li');
      elm.innerText=res
      document.getElementById('formWithPromis').appendChild(elm);
       
    })
  }


  
}
