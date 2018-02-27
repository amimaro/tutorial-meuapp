import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: any;

  constructor(public appService: AppService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.appService.getArtigosById(this.id)
    });
  }

  editar() {
    this.router.navigate(['/form/'+this.id]);
  }

  excluir() {
    this.appService.deleteArtigo(this.id);
    this.router.navigate(['/']);
  }

}
