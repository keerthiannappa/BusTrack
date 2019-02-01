import { Component, OnInit } from '@angular/core';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-change-route',
  templateUrl: './change-route.component.html',
  styleUrls: ['./change-route.component.css']
})
export class ChangeRouteComponent implements OnInit {

  buses: any;
  constructor(private service:BusService) { }

  ngOnInit() {
    this.fetchbuses();
  }
  fetchbuses() {
    this.service.getAll().subscribe(res => {
      console.log(res);
      this.buses = res;
    });
  }
}
