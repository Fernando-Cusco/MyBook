import { Component, OnInit, Input } from '@angular/core';
import { Direccion } from '../../pages/register/direccion';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {

  direccion: Direccion = new Direccion();
  ciudad: string;
  calles: string;
  constructor(private popCtrl: PopoverController) { }

  ngOnInit() {}


  set() {
    this.popCtrl.dismiss({
      ciudad: this.ciudad,
      calles: this.calles
    })
    
  }

}
