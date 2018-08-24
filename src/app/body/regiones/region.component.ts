import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Region } from '../../interfaces/region.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region: Region = {
    nombre: '',
    ordinal: 0
  };

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.region);
  }

}
