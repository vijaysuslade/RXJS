import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { take, toArray, takeLast, map, retryWhen, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(private _dataService: DataService) { }
  data;
  status="no data";
  featching:boolean=false;
  ngOnInit(): void {
  }
  getData() {
    this.featching=true;
    this._dataService.getData().pipe(
      map(res => res.slice(0, 5)),
      retryWhen(err=>err.pipe(
        
        scan((retryCount)=>{
           if(retryCount>=3){
             throw err;
           }else{
             retryCount=retryCount+1;
             console.log("RetryCount"+retryCount);
             return retryCount;
           }

        },0)
      ))
    ).subscribe(res => {
      this.data = res;
      this.featching=false;
      this.status="fetched data"
    },
     (err)=>{
       this.featching=false;
       this.status="problem in fetching data..."
     })
 
  }
}
