import { Component, OnInit, ViewChild } from "@angular/core";
import { BusService } from "../services/bus.service";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @ViewChild("gmap") gmapElement: any;
  buses: any;
  currentBus: any;
  currentRoute: any;
  constructor(private busservice: BusService) {}

  ngOnInit() {
    this.busservice.getAll().subscribe(res => {
      this.buses = res;
      this.getSpecific(this.buses[0].device_id,this.buses[0].route_name);    
    });
   
  }
  getSpecific(id,name) {
    this.busservice.getSpecific(id).subscribe(res => {
      this.currentRoute=name;
      this.currentBus = res;
      this.currentBus.lat=+this.currentBus.lat;
      this.currentBus.lon=+this.currentBus.lon;
    });
  }
}
