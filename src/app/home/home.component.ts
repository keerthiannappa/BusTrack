import { Component, OnInit, ViewChild } from "@angular/core";
import { BusService } from "../services/bus.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @ViewChild("gmap") gmapElement: any;
  map: google.maps.Map;
  buses: any;
  currentBus: any;
  currentRoute: any;
  constructor(private busservice: BusService) {}

  ngOnInit() {
    this.busservice.getAll().subscribe(res => {
      this.buses = res;
      console.log(this.buses);
      this.currentBus = this.buses[0];
      this.getSpecific(this.buses[0].device_id);
      this.currentRoute=this.buses[0].route_name;
     
    });}
    mapFunction(lat,lon){
      let location = new google.maps.LatLng(lat, lon);
    var mapProp = {
      center: new google.maps.LatLng(lat, lon),
      zoom: 15,
      marker: {
       position:location
        
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
   

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  getSpecific(id) {
    this.busservice.getSpecific(id).subscribe(res => {
      this.currentBus = res.json();
      console.log(this.currentBus);
      this.mapFunction(this.currentBus.lat,this.currentBus.lon);
    });
  }
}
