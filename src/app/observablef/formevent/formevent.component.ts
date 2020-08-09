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
      let video = 'video ' + this.count++;
      let element = document.createElement('li');
      element.innerText = video;
      document.getElementById('eleContainer').appendChild(element);

    })
  }

  ngOnInit(): void {
  }


}
