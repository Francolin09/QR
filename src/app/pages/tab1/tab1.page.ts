import { Component } from '@angular/core';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private barcodeScanner: BarcodeScanner) {}

  //Cuando la pagina es cargada
  ionViewDidEnter(){
    console.log('did enter')
  }

  //Cuando sale de la pagina
  ionViewDidLeave(){
    console.log('did leave')
  }
   
  //cuando cargará una pagina pero aun no lo hace
  ionViewWillEnter(){
    console.log('will enter')
  }

  //En el instante que se sale de una pag pero aun no se sale por completo
  ionViewWillLeave(){
    console.log('will leave')
  }
  scan(){}

}
