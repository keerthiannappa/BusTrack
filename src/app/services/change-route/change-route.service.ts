import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChangeRouteService {

  url="http://103.249.82.140:9999/kcgtrack";

  constructor(private http:Http) { }

  swap(device,route){
    return this.http.get(this.url+"/changeroute.php?route_id="+route+"&device_id="+device).pipe(map(res=>{
      return res.status;
    }));
  }
  
}
