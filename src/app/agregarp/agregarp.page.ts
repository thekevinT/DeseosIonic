import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/clases/index';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ListaDeseosService } from '../services/lista-deseos.service';



@Component({
  selector: 'app-agregarp',
  templateUrl: './agregarp.page.html',
  styleUrls: ['./agregarp.page.scss'],
})
export class AgregarpPage implements OnInit {

nombreLista:string = "";
nombreItem:string = "";

items: ListaItem[] = [];

  constructor( public alertController: AlertController, public navCtrl: NavController, public _listaDeseos: ListaDeseosService ) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Nombre de la lista',
      message: 'El nombre de la lista es necesario!.',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {}
  agregar(){
    if ( this.nombreItem.length == 0 ) {
        return;
      }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";

  }
  
  borrarItem( idx: number){
    this.items.splice(idx, 1);
  }
 
  guardarLista(){
    if ( this.nombreLista.length == 0){
      this.presentAlert();
      return;
    }

    let lista = new Lista( this.nombreLista );
    lista.items = this.items;

   // this._listaDeseos.listas.push( lista );
   this._listaDeseos.agregarlista( lista ); 
    this.navCtrl.pop();
  }

}
