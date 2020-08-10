import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-formevent',
  templateUrl: './formevent.component.html',
  styleUrls: ['./formevent.component.css']
})
export class FormeventComponent implements OnInit, AfterViewInit {

  @ViewChild('btnAdd') btnAdd: ElementRef;
  count: number = 1;
  constructor() { }
  ngAfterViewInit(): void {
    fromEvent(this.btnAdd.nativeElement, 'click').subscribe(res => {
      let val = 'video ' + this.count++;
      this.printElement(val,'eleContainer1');
      this.printElement(val,'eleContainer2');
    })
  }

  printElement(val,containerId){
     console.log(containerId)
     let el = document.createElement('li');
     el.innerText=val;
     let eli= document.getElementById(containerId).append(el);
  }
  ngOnInit(): void {

  }


}
