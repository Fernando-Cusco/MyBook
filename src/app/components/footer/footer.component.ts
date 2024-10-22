import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  inicio(){
    this.router.navigate(['inicio']);
  }
  buscar(){
    this.router.navigate(['buscar']);
  }

  compras() {
    this.router.navigate(['mis-compras']);
  }

}
