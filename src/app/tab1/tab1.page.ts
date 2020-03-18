import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
//public lista: any;
//public idx: number;
 
  constructor( private _listaDeseos : ListaDeseosService, private router: Router ) {}
  ngOnInit() {}

  verDetalle(/*lista, indx*/){
    //this.router.navigate(['/detalle']);

  }

}
