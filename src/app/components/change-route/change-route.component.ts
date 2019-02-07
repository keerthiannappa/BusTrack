import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { BusService } from '../../services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-route',
  templateUrl: './change-route.component.html',
  styleUrls: ['./change-route.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChangeRouteComponent implements OnInit {

  buses: any;
  changeRouteForm:FormGroup;
  submitted = false;

  constructor(
    private service:BusService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit() {
    this.fetchbuses();
    this.changeRouteForm = this.formBuilder.group({
      bus_no:["",Validators.required],
      route_name:["",Validators.required]
    })
  }

  get f(){ return this.changeRouteForm.controls;}

  onSubmit(){
    console.log(this.changeRouteForm.value)
    this.submitted=true;
 if (this.changeRouteForm.invalid){
      return;
    }
    alert("success demo")
  }


  fetchbuses() {
    this.service.getAll().subscribe(res => {
      console.log(res);
      this.buses = res;
    });
  }
}
