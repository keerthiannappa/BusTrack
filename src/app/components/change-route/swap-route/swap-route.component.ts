import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { BusService } from "src/app/services";
import { MatSnackBar } from "@angular/material";
import sortjsonarray from "sort-json-array";
import { ChangeRouteService } from "src/app/services/change-route/change-route.service";

@Component({
  selector: "app-swap-route",
  templateUrl: "./swap-route.component.html",
  styleUrls: ["./swap-route.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SwapRouteComponent implements OnInit {
  @ViewChild('formDirective') formDirective: NgForm;
  buses: any;
  swapRouteForm: FormGroup;
  swapForm: FormGroup;
  submitted = false;
  swapbus = {
    route_id: "",
    device_id: ""
  };

  constructor(
    private busService: BusService,
    private changeRouteService: ChangeRouteService,
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
    console.log(this.swapbus);

    this.changeRouteService
      .swap(this.swapbus.device_id, this.swapbus.route_id)
      .subscribe(res => {
        if (res === 200)
          this.changeRouteService
            .swap(
              this.swapRouteForm.value.bus_no,
              this.swapRouteForm.value.route_name
            )
            .subscribe(r => {
              if (r === 200) {
                this.snackBar.open("SUCCESS!!", "close", {
                  verticalPosition: "top",
                  horizontalPosition: "end",
                  duration: 10000,
                  panelClass: ["test"]
                });
                this.submitted = true;
                this.swapRouteForm.controls['bus_no'].setValue("");
                this.swapRouteForm.controls['route_name'].setValue("");
                this.swapForm.reset();
              }
            });
      });
  }

  fetchbuses() {
    this.busService.getAll().subscribe(res => {
      res = sortjsonarray(res, "route_name");
      this.buses = res;
    });
  }

  onChange(what: String) {
    if (what === "bus") {
      let bus = this.buses.filter(
        bus => bus.device_id === this.swapRouteForm.value.bus_no
      );
      this.swapForm.controls["route_name"].setValue(bus[0].route_name);
      this.swapbus.route_id = bus[0].route_id;
    }
    if (what === "route") {
      let bus = this.buses.filter(
        bus => bus.route_id === this.swapRouteForm.value.route_name
      );
      this.swapForm.controls["bus_no"].setValue(bus[0].bus_no);
      this.swapbus.device_id = bus[0].device_id;
    }
  }
}
