import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-pago',
  templateUrl: './confirmar-pago.component.html',
  styleUrls: ['./confirmar-pago.component.scss'],
})
export class ConfirmarPagoComponent implements OnInit {

  constructor(private _pop: PopoverController) { }

  ngOnInit() {}

  confirmar() {
    this._pop.dismiss({
      'ok': 'ok'
    });
  }

  cancelar() {
    this._pop.dismiss({
      'cancelar': 'cancelar'
    });
  }
}
