import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: any;

  constructor(public appService: AppService, public route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        console.log('Modo Edição')
        this.appService.getArtigosById(this.id);
      } else {
        console.log('Modo Criação')
      }
    });
  }

  ngOnInit() {
  }

  enviar() {
    if (this.id) {
      console.log('Modo Edição')
      this.appService.editar(this.id);
    } else {
      console.log('Modo Criação')
      this.appService.salvar();
    }
    this.router.navigate(['/']);
  }

}
