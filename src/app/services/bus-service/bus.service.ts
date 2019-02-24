import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BusService {

  url="http://103.249.82.140:9999/kcgtrack";

  constructor(private http:Http) { }

  getAll(){
    return this.http.get(this.url+"/getallbus.php").pipe(map(res=>{
      return res.json();
    }))
  }
  getSpecific(id){
    return this.http.get(this.url+"/getspecific.php?id="+id).pipe(map(res=>{
      return res.json();
    }))
  }
  getStops(id){
    return this.http.get(this.url+"/getstops.php?id="+id).pipe(map(res=>{
      return res.json();
    }))
  }
}
