import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  artigos: any = [];
  titulo: string = "";
  conteudo: string = "";
  form: any = {};
  apiUrl: string = 'https://tutorial-meuapp.herokuapp.com/api/artigo/';

  constructor(private http: HttpClient) {
    this.form.title = "";
    this.form.body = "";
  }

  salvar() {
    this.http.post(this.apiUrl, this.form)
    .subscribe(
      res => {
        alert('Artigo Salvo com Sucesso!');
      },
      err => {
        console.error(err);
      }
    );
  }

  getArtigos() {
    this.http.get(this.apiUrl)
    .subscribe(
      res => {
        console.log(res);
        this.artigos = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  getArtigoById(id) {
    this.http.get(this.apiUrl + id)
    .subscribe(
      res => {
        console.log(res);
        this.titulo = res['title'];
        this.conteudo = res['body'];
        this.form.title = this.titulo;
        this.form.body = this.conteudo;
      },
      err => {
        console.error(err);
      }
    );
  }

  editar(id) {
    this.http.put(this.apiUrl + id, this.form)
    .subscribe(
      res => {
        alert('Alterado com Sucesso!');
      },
      err => {
        console.error(err);
      }
    );
  }

  deleteArtigo(id) {
    this.http.delete(this.apiUrl + id)
    .subscribe(
      res => {
        console.log(res);
        alert('Artigo Removido com Sucesso!')
      },
      err => {
        console.error(err);
      }
    );
  }

}
