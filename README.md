## meuapp

Projeto da série de tutoriais realizado pelo blog [Vila do Silício](viladosilicio.com.br):

* [Gerando Aplicações Angular FullStack - Parte 1](http://viladosilicio.com.br/gerando-aplicacoes-angular-fullstack-parte-1)
* [Gerando Aplicações Angular FullStack - Parte 2](http://viladosilicio.com.br/gerando-aplicacoes-angular-fullstack-parte-2)
* [Gerando Aplicações Angular FullStack - Parte 3](http://viladosilicio.com.br/gerando-aplicacoes-angular-fullstack-parte-3)
* [Gerando Aplicações Angular FullStack - Parte 4](http://viladosilicio.com.br/gerando-aplicacoes-angular-fullstack-parte-4)


### Primeiros Passos

```bash
npm run dev
```

Execute `npm run dev` para executar o modo de desenvolvimento. O browser vai abrir automaticamente a página `http://localhost:8080/`. Aguarde até que todo o projeto seja construído. A cada alteração no código, automaticamente, o projeto vai atualizar a página.

##### Criando endpoints

Para gerar um novo endpoint para a API, execute o comando abaixo.

```bash
yo angular-api:endpoint
```

##### .env
```
# Node Server Port
PORT=8000

# Node Server Url
APP_URL=http://localhost:8000/

# BrowserSync Proxy Url
CALLBACK_URL=http://localhost:8080/

# MongodDB Url
MONGO_DB_URI=mongodb://localhost:27017/meuapp
```

Construído com [generator-angular-api](https://github.com/amimaro/generator-angular-api).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
