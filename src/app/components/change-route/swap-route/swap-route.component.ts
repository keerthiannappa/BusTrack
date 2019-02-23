import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BusService } from "src/app/services";
import { MatSnackBar } from "@angular/material";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-swap-route",
  templateUrl: "./swap-route.component.html",
  styleUrls: ["./swap-route.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SwapRouteComponent implements OnInit {
  buses: any;
  swapRouteForm: FormGroup;
  swapForm: FormGroup;
  submitted = false;
  swapbus = {
    route_id: "",
    device_id: ""
  };

  constructor(
    private service: BusService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchbuses();
    this.swapRouteForm = this.formBuilder.group({
      bus_no: ["", Validators.required],
      route_name: ["", Validators.required]
    });
    this.swapForm = this.formBuilder.group({
      bus_no: [""],
      route_name: [""]
    });
  }

  get f() {
    return this.swapRouteForm.controls;
  }

  onSubmit() {
    if (this.swapRouteForm.invalid) {
      return;
    }
    this.snackBar.open("SUCCESS!!", "close", {
      verticalPosition: "top",
      horizontalPosition: "end",
      duration: 10000,
      panelClass: ["test"]
    });
    console.log(this.swapRouteForm.value);
    this.submitted = true;
  }

  fetchbuses() {
    this.service.getAll().subscribe(res => {
      console.log(res);
      this.buses = res;
    });
  }

  onChange(what: String) {
    if (what === "bus") {
      let bus = this.buses.filter(
        bus => bus.bus_no === this.swapRouteForm.value.bus_no
      );
      this.swapForm.controls["route_name"].setValue(bus[0].route_name);
      this.swapbus.route_id = bus[0].route_id;
    }
    if (what === "route") {
      let bus = this.buses.filter(
        bus => bus.route_name === this.swapRouteForm.value.route_name
      );
      this.swapForm.controls["bus_no"].setValue(bus[0].bus_no);
      this.swapbus.device_id = bus[0].device_id;
    }
  }
}
