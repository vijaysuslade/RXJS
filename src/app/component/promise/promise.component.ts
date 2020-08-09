import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
 DELL={
     brand:"DELL",
     prize:20000,
 }
 HP={
  brand:"DELL",
  prize:20000,
}
notAva={
  brand:'Not avaliable', 
  status:'failed'
}
  constructor() { }
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, rejects) => {
      if(this.dellIsAvaliable()){
        return setTimeout(()=>{
          resolve(this.DELL)
        },300)
      }else if(this.hpIsAvaliable()){
           return setTimeout(()=>{
             resolve(this.HP)
           },300)
      }else{
        return setTimeout(()=>{
          rejects(this.notAva);
        },300)
      }
    })

    buyLaptop.then(res=>{
      console.log(res);
    }).catch(res=>{
      console.log(res);
    })
  }
  dellIsAvaliable(){
    return true;
  }
  hpIsAvaliable(){
    return true;
  }
   
   


}
