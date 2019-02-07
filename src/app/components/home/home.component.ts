import { Component, OnInit, ViewChild } from "@angular/core";
import { BusService } from "../../services";


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
      this.getSpecific(this.buses[0].device_id,this.buses[0].route_name,this.buses[0].bus_no);    
    });
   
  }
  getSpecific(id,name,no) {
    this.busservice.getSpecific(id).subscribe(res => {
      this.currentRoute=name;
      this.currentBus = res;
      this.currentBus.number=no;
      this.currentBus.lat=+this.currentBus.lat;
      this.currentBus.lon=+this.currentBus.lon;
    });
  }
}
