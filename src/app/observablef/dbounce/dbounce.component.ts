import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-dbounce',
  templateUrl: './dbounce.component.html',
  styleUrls: ['./dbounce.component.css']
})
export class DbounceComponent implements OnInit, AfterViewInit {

  @ViewChild('searchUser') searchUser: ElementRef;
   data;
  constructor() { }
  ngAfterViewInit(): void {
    const serachTerm = fromEvent<any>(this.searchUser.nativeElement, 'keyup').pipe(map(event=>event.target.value));
    serachTerm.pipe(
      debounceTime(5000),//afetr perticular time data will send to server.
     distinctUntilChanged()//if we write the text and delete again then it will not send the data to server.
    ).subscribe(res => {
      console.log("res");
      this.data=res;
    })
  }
  ngOnInit(): void {

  }

}
