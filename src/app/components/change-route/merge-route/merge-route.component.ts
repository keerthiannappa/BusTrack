import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BusService } from "src/app/services";
import { ChangeRouteService } from "src/app/services/change-route/change-route.service";
import { MatSnackBar } from "@angular/material";
import sortjsonarray from "sort-json-array";

@Component({
  selector: "app-merge-route",
  templateUrl: "./merge-route.component.html",
  styleUrls: ["./merge-route.component.css"]
})
export class MergeRouteComponent implements OnInit {
  buses: any;
  mergeRouteForm: FormGroup;

  constructor(
    private busService: BusService,
    private changeRouteService: ChangeRouteService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchbuses();
    this.mergeRouteForm = this.formBuilder.group({
      bus_no:["",Validators.required],
      route_name:["",Validators.required]
    })
  }

  get f(){
    return this.mergeRouteForm.controls;
  }

  onSubmit(){
    if(this.mergeRouteForm.invalid){
      return;
    }
// should be filled
  }

  fetchbuses() {
    this.busService.getAll().subscribe(res => {
      res = sortjsonarray(res, "route_name");
      this.buses = res;
    });
  }
}
