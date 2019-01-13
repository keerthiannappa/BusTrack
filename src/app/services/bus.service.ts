import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:Http) { }

  getAll(){
    return this.http.get("http://103.249.82.140:9999/kcgtrack/getallbus.php").pipe(map(res=>{
      return res.json();
    }))
  }
  getSpecific(id){
    return this.http.get("http://103.249.82.140:9999/kcgtrack/getspecific.php?id="+id).pipe(map(res=>{
      return res.json();
    }))
  }
  getStops(id){
    return this.http.get("http://103.249.82.140:9999/kcgtrack/getstops.php?id="+id).pipe(map(res=>{
      return res.json();
    }))
  }
}
