import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }

  getData():Observable<any> {
   return  this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
