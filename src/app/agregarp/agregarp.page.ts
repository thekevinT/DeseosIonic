import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/clases/index';



@Component({
  selector: 'app-agregarp',
  templateUrl: './agregarp.page.html',
  styleUrls: ['./agregarp.page.scss'],
})
export class AgregarpPage implements OnInit {

nombreLista:string;
nombreItem:string;

items: ListaItem[] = [];

  constructor() { }

  ngOnInit() {}
  agregar(){
    if( this.nombreItem.length == 0){
        return;
      }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";

  }

}
