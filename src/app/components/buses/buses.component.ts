import { Component, OnInit } from "@angular/core";
import { BusService } from "../../services";

@Component({
  selector: "app-buses",
  templateUrl: "./buses.component.html",
  styleUrls: ["./buses.component.css"]
})
export class BusesComponent implements OnInit {
  buses: any;
  stops: any;
  currentBus: any;
  constructor(private service: BusService) {}

  ngOnInit() {
    this.fetchbuses();
  }

  fetchbuses() {
    this.service.getAll().subscribe(res => {
      console.log(res);
      this.buses = res;
      this.fetchstops(this.buses[0].route_id);
      this.currentBus = this.buses[0].route_name;
    });
  }
  fetchstops(id) {
    this.service.getStops(id).subscribe(res => {
      console.log(res);
      if(res==""){this.stops=[{name:"not found"}]}
      else {this.stops = res;}
    });
  }
  changeCurrent(name, id) {
    this.fetchstops(id);
    this.currentBus = name;
  }
}
