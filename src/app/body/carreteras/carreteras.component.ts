import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carreteras',
  templateUrl: './carreteras.component.html',
  styleUrls: ['./carreteras.component.css']
})
export class CarreterasComponent implements OnInit {

  region: number;
  constructor( private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe( params => {
      this.region = params['region'];
      console.log(this.region);
    });
   }

  ngOnInit() {
  }

}
