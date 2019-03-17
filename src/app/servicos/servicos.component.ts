import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

    jsonServicos = [
      {
        id: 1,
        titulo: 'INFRAESTRUTURA',
        descricao: 'Instalação e Projetos de Cabeamento Estruturado Cat5e | Cat6 | Cat6a ',
        icone: 'fas fa-ethernet'

      },
      {
        id: 2,
        titulo: 'Assistência Técnica',
        descricao: 'Instalação e Manutenção em Centrais telefônicas PABX'
      },
      {
        id: 3,
        titulo: 'TELEFONIA IP',
        descricao: 'Provemos soluções e projetos para implantação de Telefonia IP'
      },
      {
        id: 4,
        titulo: 'CONSULTORIA',
        descricao: 'Soluções em sistemas de Telefonia Empresarial'
      },
    ]


  constructor() { }

  ngOnInit() {
  }

}
